import '../../App.css'
import WorkingExplaining from '../WorkingExplaining'
import Footer from '../Footer'
import VideoFeed from '../VideoFeed'
import Price from '../Price'
import HeroSection from '../HeroSection'
import { useEffect } from 'react'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroSection />
            <WorkingExplaining />
            <VideoFeed />
            <Price />
            <Footer />
        </>
    )
}

export default Home
