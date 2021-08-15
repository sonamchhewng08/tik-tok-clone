import React from 'react'
import './css/videoFooter.css'
import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const VideoFooter = ({channel,des,song}) => {
    return (
        <div className="video_footer">
            <div className="videofooter_text">
                <h3>@{channel}</h3>
                <p>{des}</p>
                <div className="videofooter_ticker">
                <MusicNoteIcon className="videofooter_icon"/> 
                <Ticker className="videofooter_ticker" mode="smooth">
                    {({index})=>(
                            <>
                                <p>{song}</p>
                            </>
                        )
                    }
                </Ticker>
                </div>
            </div>
            <img className="videofooter_logo" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter
