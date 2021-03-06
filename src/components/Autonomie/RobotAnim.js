import './RobotAnim.css';
import robot_3d from '../../images/hiverbtcs_3drender_3-4_R.png'

import { useEffect, useRef, useState } from 'react';


function RobotAnim() {

    const [scroll, setScroll] = useState(0);
    const [colorCamera, setColorCamera] = useState('white')
    const [colorLidar, setColorLidar] = useState('white')
    const [fontCamera, setFontCamera] = useState('Gilroy-Light')
    const [fontLidar, setFontLidar] = useState('Gilroy-Light')

    useEffect(() => {

        let progressBarHandler = () => {

            const totalScroll = document.querySelector('.robotanim-global-div').getBoundingClientRect().y;
            const max = 1200;
            var scrollValue = 0

            if (totalScroll > 0) {
                scrollValue = 0
            } else {
                if (Math.abs(totalScroll) > max) {
                    scrollValue = 1
                } else {
                    scrollValue = Math.abs(totalScroll) / max
                }
            }

            if (scrollValue > 0 && scrollValue < 0.5) {
                setColorCamera('red')
                setColorLidar('white')
                setFontCamera('Gilroy-ExtraBold')
                setFontLidar('Gilroy-Light')
            }
            if (scrollValue > 0.5 && scrollValue < 1) {
                setColorCamera('white')
                setColorLidar('#FF4D00')
                setFontCamera('Gilroy-Light')
                setFontLidar('Gilroy-ExtraBold')
            }
            if (scrollValue <= 0) {
                setColorCamera('white')
                setColorLidar('white')
                setFontCamera('Gilroy-Light')
                setFontLidar('Gilroy-Light')
            }

            setScroll(scrollValue);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });


    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {

        let OpacityHandler = () => {

            // var totalScroll = document.querySelector('.textengineer-div').getBoundingClientRect().y;
            var FullScreenScroll = window.scrollY;
            var FullScreenScrollValue = 0


            if (FullScreenScroll > 1300) {
                FullScreenScrollValue = (FullScreenScroll - 1300) / (1900 - 1300)
            }

            setScrollOpacity(FullScreenScrollValue);
        }

        window.addEventListener("scroll", OpacityHandler);

        return () => window.removeEventListener("scroll", OpacityHandler);
    });

    const [image, setImage] = useState(null)

    const canvas = useRef(null)

    useEffect(() => {
        const catImage = new Image();
        catImage.src = { robot_3d }
        catImage.onload = () => setImage(catImage)
    }, [])

    useEffect(() => {
        if (image && canvas) {
            const ctx = canvas.current.getContext("2d")
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, 400, 256 + 82)
            ctx.drawImage(image, (400 - 256) / 2, 40)
        }
    }, [image, canvas])


    return (
        <div className="robotanim-global-div" >

            <div
                className="robotanim-container"
                style={{ opacity: scrollOpacity }}
            >

                {/* <div className="div-robot--image">
                    <div class="div-robot__lidar1"></div>
                    <div class="div-robot__lidar10"></div>
                    <div class="div-robot__lidar11"></div>
                    <div class="div-robot__lidarar">Lidar arri??re</div>
                </div> */}
                <img src={robot_3d} alt='' className='robot--image' />

                <div className="explain--text">

                    <div className="scrollbar--explain--text">
                        <div
                            className="motion--scrollbar"
                            style={{ transform: `scaleY(${scroll})` }}
                        >

                        </div>
                    </div>

                    <div className="description--explain--text">

                        <div className="title--explain--text">
                            CAPTEURS
                        </div>

                        <div className="para--explain--text">
                            Nos robots combinent deux <span style={{ color: colorCamera, transition: 'all 1s ease-out', fontFamily: fontCamera }}>cam??ras</span> st??r??oscopiques ainsi que deux <span style={{ color: colorLidar, transition: 'all 1s ease-out', fontFamily: fontLidar }}>lidars</span> pour couvrir son environnement ?? 360 degr??s.
                        </div>

                    </div>


                </div>

            </div>

        </div >
    )
}

export default RobotAnim
