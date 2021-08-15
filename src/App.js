import React, { useState,useEffect } from 'react'
import Video from './Video'
import db from './firebase'
import './css/App.css'
 const App = () => {
    const [videos, setvideos] = useState([]);
    console.log(db);
    console.log("dfds");
    useEffect(() => {
        db.collection('videos').onSnapshot(snapshot=>(
            setvideos(snapshot.docs.map(doc=> doc.data())))
        );
    }, [videos])
    return (
        <div className="app">
            <div className="app_videos">
                {videos.map(
                    ({url,channel,description,song,likes,message,shares})=>(
                        <Video
                            video={url}
                            channel={channel}
                            des={description}
                            song={song}
                            likes={likes}
                            shares={shares}
                            mess={message}
                        />
                )
                )}
            </div>
        </div>
    )
}
export default App;