import './VideoFeed.css'
import BackVideo from "../videos/Devo_Promo.mp4"



function VideoFeed() {
    return (
        <div className="video-global-div">
            <video autoPlay loop muted width="640" height="480">
                <source src={BackVideo} type='video/mp4' />
            </video>
        </div >


    )
}

export default VideoFeed
