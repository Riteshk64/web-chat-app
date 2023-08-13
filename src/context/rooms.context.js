import { createContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformToArrayWithId } from "../misc/helpers";

const RoomsContext = createContext();

export const RoomsProvider = ({children}) => {
    const [rooms,setRooms] = useState(null);
    useEffect(() => {
        const roomListRef = database.ref('rooms');
        roomListRef.on('value', (snap) => {
            const data = transformToArrayWithId(snap.val());
            setRooms(data);
        });

        return () => {
            roomListRef.off(); //Detach all real time listeners from this reference in the database
        }
    },[]);
    return <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
};