import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import hiverbtcsLock from '../images/hiverbtcsLock-up - Color.png';

function Footer() {
    return (

        <div className="footer-container">
            <div className="divider"></div>
            <div className="footer-80-percent">

                <div className="left-footer">

                    <div className="logo-footer">
                        <img src={hiverbtcsLock} alt="hiverbtcsLock" className='hiverbtcsLock-footer' />
                    </div>

                    <div className="social-icons">
                        <button
                            className='social-icon-link instagram'
                            onClick={() => window.open("https://www.instagram.com/devo_group/")}
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </button>

                        <button
                            className='social-icon-link linkedin'
                            onClick={() => window.open("https://www.linkedin.com/company/devo-group/")}
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </button>
                    </div>

                </div>

                <div className="right-footer">
                    <Link
                        to='/demo'
                        className='footer-link'
                    >
                        En savoir plus
                    </Link>

                    <Link
                        to='/'
                        className='footer-link'
                    >
                        Rejoindre l'équipe
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Footer
