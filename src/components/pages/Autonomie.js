import React, { useEffect } from 'react'
import '../../App.css'
import FirstPage from '../Autonomie/FirstPage'
import TextEngineer from '../Autonomie/TextEngineer'
import RobotAnim from '../Autonomie/RobotAnim'
import Carrousel from '../Autonomie/Carrousel'
import VideoPerception from '../Autonomie/VideoPerception'
import TechDetail from '../Autonomie/TechDetail'
import Footer from '../Footer'

function Autonomie() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <FirstPage />
            <TextEngineer />
            <RobotAnim />
            <Carrousel />
            <VideoPerception />
            <TechDetail />
            <Footer />
        </>
    )
}

export default Autonomie
