import './TextEngineer.css'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

function TextEngineer() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {

            var FullScreenScroll = window.scrollY;
            var FullScreenScrollValue = 0


            if (FullScreenScroll > 500) {
                FullScreenScrollValue = (FullScreenScroll - 500) / (900 - 500)
            }

            if (FullScreenScroll > 1000) {
                FullScreenScrollValue = 1 - ((FullScreenScroll - 900) / (1500 - 900))
            }

            if (FullScreenScroll > 1500) {
                FullScreenScrollValue = 0
            }

            setScroll(FullScreenScrollValue);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <div
            className="textengineer-div"
        >
            <div
                className="title--div"
                style={{ opacity: scroll, position: 'sticky' }}
            >
                <div className="textengineer--title">
                    Utilisation d'un technologie de pointe
                    <span style={{ fontFamily: 'Gilroy-ExtraBold' }}>qui a fait ses preuves</span>
                </div>
            </div>

            <div className="para--div"
                style={{ opacity: scroll }}
            >
                <div className="textengineer--paragraph" >
                    Nos ingénieurs ont développé le software et le hardware de nos robots donc nous avons aucun compromis à faire.
                </div>
            </div>

        </div >
    )
}

export default TextEngineer
