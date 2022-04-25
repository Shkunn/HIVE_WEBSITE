import './VideoPerception.css';
// import BackVideo from "../../videos/REX.mp4"


function VideoPerception() {


    return (
        <div className="videoperception-global-div" >

            <div className="micro--title">
                VIDEOS DE LIVRAISONS
            </div>

            <div className="title--presentation">
                Totalement autonome, <span style={{ fontFamily: 'Gilroy-ExtraBold' }}>même dans des environnements complexes</span>
            </div>

            <div className="video--perception">
                {/* <video className='video' autoPlay loop muted>
                    <source src={BackVideo} type='video/mp4' />
                </video> */}
            </div>

            <div className="description--video--perception">
                <div className="description--video--title">
                    NAVIGATION TOTALEMENT AUTONOME
                </div>
                <div className="description--video--paragraphe">
                    JUMBY se déplace sur l'Esplanade de la Défense aux heures de pointe.
                </div>
            </div>

        </div >
    )
}

export default VideoPerception
