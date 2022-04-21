import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
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
                        <Link
                            className='social-icon-link facebook'
                            to='/HIVE_WEBSITE'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/HIVE_WEBSITE'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/HIVE_WEBSITE'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>

                </div>
                
                <div className="right-footer">
                    <Link
                        to='/HIVE_WEBSITE/demo'
                        className='footer-link'
                    >
                        En savoir plus
                    </Link>

                    <Link
                        to='/HIVE_WEBSITE/'
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
