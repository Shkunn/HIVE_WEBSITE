import './VideoBandeau.css'
import BackVideo from "../../videos/Devo_Promo.mp4"

function VideoBandeau() {
    return (
        <>
            <div className="div-empty"></div>
            <div className="videobandeau-container">
                <video className='video-bandeau' autoPlay loop muted playsinline>
                    <source src={BackVideo} type='video/mp4' />
                </video>
            </div >
        </>
    )
}

export default VideoBandeau