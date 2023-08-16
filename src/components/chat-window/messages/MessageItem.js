/* eslint-disable no-constant-condition */
import TimeAgo from "timeago-react";
import ProfileAvatar from "../../ProfileAvatar";
import ProfileInfoBtnModal from "./ProfileInfoBtnModal";
import PresenceDot from "../../PresenceDot";
import { Button } from "rsuite";
import { useCurrentRoom } from "../../../context/current-room.context";
import { auth } from "../../../misc/firebase";
import { useHover, useMediaQuery } from "../../../misc/custom-hooks";
import IconBtnControl from "./IconBtnControl";
import ImageBtnModal from "./ImageBtnModal";

const renderFileMessage = (file) => {
    if(file.contentType.includes('image')){
        return <div className="height-220">
            <ImageBtnModal src={file.url} fileName={file.name} />
        </div>
    }
    return <a href={file.url}>Download {file.name}</a>;
}

const MessageItem = ({message,handleAdmin, handleLike, handleDelete}) => {
    const {author,createdAt,text, file, likes, likeCount} = message;

    const [selfRef, isHovered] = useHover();
    const isMobile = useMediaQuery('(max-width: 992px)');

    const isAdmin = useCurrentRoom(v => v.isAdmin);
    const admins = useCurrentRoom(v => v.admins);

    const isMsgAuthorAdmin = admins.includes(author.uid);
    const isAuthor = auth.currentUser.uid === author.uid;
    const canGrantAdmin = isAdmin && !isAuthor;

    const canShowIcons = isMobile || isHovered;
    const isLiked = likes && Object.keys(likes).includes(auth.currentUser.uid);
    return ( 
    <li className={`padded mb-1 cursor-pointer ${isHovered ? 'bg-black-02' : ''}`} ref={selfRef}>
        <div className="d-flex align-items-center font-bolder mb-1">
            <PresenceDot uid={author.uid}/>
            <ProfileAvatar src={author.avatar} name={author.name} className="ml-1" size="xs"/>
            <ProfileInfoBtnModal profile={author} className="p-0 ml-1 text-black">
                {canGrantAdmin && 
                <Button block onClick={() => handleAdmin(author.uid)} color="blue">
                    {isMsgAuthorAdmin ? 'Remove admin rights' : 'Give admin rights for this room'}
                </Button>
                }
            </ProfileInfoBtnModal>
            <TimeAgo datetime={createdAt} className="font-normal text-black-45 ml-2"/>
             <IconBtnControl {...(isLiked ? {color: 'red'} : {})} isVisible={canShowIcons} iconName="heart" tooltip="Like this message" onClick={() => handleLike(message.id)} badgeContent={likeCount} />
             { isAuthor && 
                <IconBtnControl isVisible={canShowIcons} iconName="close" tooltip="Delete this message" onClick={() => handleDelete(message.id)} />
             }
        </div>
        <div>
            {text && <span className="word-break-all">{text}</span>}
            {file && renderFileMessage(file)}
        </div>
    </li> 
    );
}
 
export default MessageItem;