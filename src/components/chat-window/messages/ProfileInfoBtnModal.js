import { Button, Modal } from "rsuite";
import useModalState from "../../../misc/custom-hooks";
import ProfileAvatar from "../../ProfileAvatar";

const ProfileInfoBtnModal = ({profile, ...btnProps}) => {
    const {isOpen, close, open} = useModalState();
    const shortName = profile.name.split(' ')[0];
    const memberSince = new Date(profile.createdAt).toLocaleDateString();
    return ( 
        <>
            <Button {...btnProps} onClick={open}>
                {shortName}
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>
                        {`${shortName}'s profile`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                <ProfileAvatar src={profile.avatar} name={profile.name} className="width-200 height-200 img-fullsize font-huge"/>
                <h4 className="mt-2">{profile.name}</h4>
                <p>Member since {memberSince}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button block onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default ProfileInfoBtnModal;