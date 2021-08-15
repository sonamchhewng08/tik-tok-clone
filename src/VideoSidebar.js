import React, { useState } from 'react'
import './css/videosidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
const VideoSidebar = ({likes,shares,mess}) => {
    const [like, setlike] = useState(false)
    const [share, setshare] = useState(false)
    const [messa, setmessa] = useState(false)
    return (
        <div className="video_sidebar">
            <div className="videosidebar_icon">
                {like ?<FavoriteIcon fontSize="large" onClick={()=>{setlike(false)}}/>:<FavoriteBorderIcon fontSize="large" onClick={()=>{setlike(true)}} />}
                <p>{like?likes+1:likes}</p>
            </div>
            <div className="videosidebar_icon">
                <ChatIcon onClick={()=>{setshare(!share)}} fontSize="large"/>
                <p>{share?shares+1:shares}</p>
            </div>
            <div className="videosidebar_icon">
                <ShareIcon onClick={()=>{setmessa(!messa)}} fontSize="large"/>
                <p>{messa?mess+1:mess}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
