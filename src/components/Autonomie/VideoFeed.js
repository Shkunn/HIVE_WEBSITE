import './VideoFeed.css'
import BackVideo from "../../videos/video-1.mp4"

function VideoFeed() {
    return (
        <div className="video-global-div">
            <video className='video' autoPlay loop muted playsInline>
                <source src={BackVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoFeed
