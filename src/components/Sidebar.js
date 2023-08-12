import { Divider } from "rsuite";
import CreateRoomBtnModal from "./CreateRoomBtnModal";
import DashboardToggle from "./dashboard/DashboardToggle";
import ChatRoomList from "./rooms/ChatRoomList";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
    const topSideBarRef = useRef();
    const [height,setHeight] = useState(0);

    useEffect(() => {
        if(topSideBarRef.current){
            setHeight(topSideBarRef.current.scrollHeight);
        }
    },[topSideBarRef]);

    return(
        <div className="h-100 pt-2">
            <div ref={topSideBarRef}>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join conversation</Divider>
            </div>
            <ChatRoomList aboveElementHeight={height}/>
        </div>
    )
}

export default Sidebar;