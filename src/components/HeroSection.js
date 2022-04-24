import '../App.css'
import './HeroSection.css'
import { Button } from './Button';
import { Link } from "react-scroll"
import robot_frontview from '../images/robot_frontview2.png';

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h1>Découvrez une livraison <span style={{ color: '#FF4D00' }}>différentes</span> des autres !</h1>
                <p style={{ fontWeight: '500', color: '#FF4D00', opacity: 0.8 }}>Qu'est ce que vous attendez ?</p>
            </div>

            <div className="hero-btn">
                <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Demander une démo
                </Button>

                <Link
                    to='workingExplaining'
                    className='btn btn--underline btn--large--underline'
                    style={{
                        fontFamily: 'Gilroy-Light',
                    }}
                    smooth={true}
                >
                    En apprendre plus
                </Link>
            </div>

            <div className="image-robot">
                <img src={robot_frontview} alt="robot_frontview" className='robot_frontview-hero' />
            </div>

        </div >
    )
}

export default HeroSection