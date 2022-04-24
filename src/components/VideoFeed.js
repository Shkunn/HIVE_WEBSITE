import './VideoFeed.css'
import BackVideo from "../videos/Devo_Promo.mp4"



function VideoFeed() {
    return (
        <div className="video-global-div">
            <video className='video' autoPlay loop muted playsinline>
                <source src={BackVideo} type='video/mp4' />
            </video>
        </div >


    )
}

export default VideoFeed
