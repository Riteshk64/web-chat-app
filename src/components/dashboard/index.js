import { Alert, Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";
import EditableInput from "../EditableInput";
import { database } from "../../misc/firebase";
import AvatarUploadBtn from "./AvatarUploadBtn";
import { getUserUpdates } from "../../misc/helpers";

const Dashboard= ({onSignOut}) => {
    const {profile} = useProfile();

    const onSave = async(newData) => {
        try {
            const updates = await getUserUpdates(profile.uid,'name',newData,database);
            await database.ref().update(updates);
            Alert.success('Nickname updated', 4000);
        } catch (error) {
            Alert.error(error.message, 4000);
        }
    }
    return(
        <><Drawer.Header>
            <Drawer.Title>
                Dashboard
            </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
            <h3>Hey, {profile.name}</h3>
            <Divider />
            <AvatarUploadBtn />
            <EditableInput name="nickname" initialValue={profile.name} onSave={onSave} label={<h6 className="mb-2">Nickname</h6>}/>
        </Drawer.Body>

        <Drawer.Footer>
            <Button block color="red" onClick={onSignOut}>
                Sign out
            </Button>
        </Drawer.Footer>
        </>
    )
}

export default Dashboard;
