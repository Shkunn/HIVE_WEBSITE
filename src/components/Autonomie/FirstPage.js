import '../../App.css'
import './FirstPage.css'
import robot from '../../images/arriere_base.png';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from "framer-motion"

function FirstPage() {
    return (
        <div className="firstpage-container">
            <div className="robot-img">

                <div className="text">

                    <div className="text--title">
                        Notre Solution
                    </div>

                    <div className="text--para">
                        Découvrez ce qu'il se cache derrière
                        <span style={{ fontFamily: 'Gilroy-ExtraBold' }}>l'autonomie de nos robots</span>
                    </div>

                </div>

                <img src={robot} alt='' style={{ opacity: 0.4 }} className='robot' />

                <motion.div
                    className='iologo-position'
                    animate={{
                        y: [0, 20, 0],
                        transition: {
                            duration: 1,
                            times: [0, 0.5, 1],
                            repeat: Infinity
                        }
                    }}
                >
                    <IoIosArrowDown
                        className='iologo'
                    />
                </motion.div>

            </div>
        </div >
    )
}

export default FirstPage