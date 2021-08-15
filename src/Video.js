import React ,{useRef, useState} from 'react'
import './css/video.css';
import VideoFooter from './VideoFooter'
import hs from './media/video.mp4'
import VideoSidebar from './VideoSidebar'
const Video = ({video,channel,des,song,likes,shares,mess}) => {
    const [play, setplay] = useState(false)
    const ref = useRef(null);
    const onvideoPress=()=>{
        if(play){
            ref.current.pause();
            setplay(false);
        } 
        else{
            ref.current.play();
            setplay(true);
        }
    }
    return (
        <div className="video">
            <video
                ref={ref}
                loop
                onClick={onvideoPress}
                className="video_player" 
                autoPlay
                src={video}>
            </video>
            <VideoFooter 
                channel={channel}
                des={des}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                shares={shares}
                mess={mess}
            />
        </div>
    )
}

export default Video
