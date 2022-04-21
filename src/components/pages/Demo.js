import React, { useEffect } from 'react'
import '../../App.css'
import Advantage from '../Demo/Advantage'
import Comparaison from '../Demo/Comparaison'
import Form from '../Demo/Form'
import VideoBandeau from '../Demo/VideoBandeau'
import WorkingExplaining from '../WorkingExplaining'
import Footer from '../../components/Footer'

function Demo() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Form />
            <WorkingExplaining />
            <Advantage />
            <VideoBandeau />
            <Comparaison />
            <Footer />
        </>
    )
}

export default Demo
