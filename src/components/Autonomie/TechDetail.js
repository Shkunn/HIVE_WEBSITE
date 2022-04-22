import './TechDetail.css';
import { motion } from 'framer-motion'
import hiverbtcs_destination from '../../images/Pngs/white/hiverbtcs_destination_w.png';
import hiverbtcs_calibration from '../../images/Pngs/white/hiverbtcs_calibration_w.png';
import hiverbtcs_hivonauts from '../../images/Pngs/white/hiverbtcs_hivonaut_w.png';
import computer_vision from '../../images/computer-vision.png';
import hivonaut_pic from '../../images/Hivonaut_pic.jpg';
import mapping_calib from '../../images/mapping_calibration.png';


function TechDetail() {


    return (
        <div className="techdetail-global-div" >
            <div className="calibration-mapping-div">
                <div className="left--element-calibration">
                    <motion.div
                        className="img--calibration"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                    >
                        <img src={mapping_calib} alt="mapping_calib" className='computer-vision-img' />
                    </motion.div>
                </div>

                <div className="right--element-calibration">
                    <div className="logo-calibration">
                        <img src={hiverbtcs_destination} alt="Logo" className='hiverbtcs_destination-tech' />
                    </div>
                    <div className="text-calibration">
                        <div className="calibration--title">
                            CALIBRATION, MAPPING ET LOCALISATION
                        </div>
                        <div className="calibration--parag">
                            Nos robots autonomes doivents avoir une compréhension très claire de leur environnement pour pouvoir. Chez HIVE Robotics, ce processsu est géré par ces trois composents : la calibration, le mapping et la localisation.
                        </div>

                    </div>
                </div>
            </div>

            <div className="teleguidance-div">
                <div className="left--element-teleguidance">
                    <div className="logo-teleguidance">
                        <img src={hiverbtcs_hivonauts} alt="Logo" className='hiverbtcs_destination-tech' />
                    </div>
                    <div className="text-teleguidance">
                        <div className="teleguidance--title">
                            HIVONAUTS
                        </div>
                        <div className="teleguidance--parag">
                            Les Hivonauts sont nos opérateurs qui assistents les robots dans les cas de navigations les plus complexe où en cas de problématique rencontrée. Nos robots apprennent de ces intéractions Homme/Machine pour avoir de moins en moins besoin de cette assistance.
                        </div>

                    </div>
                </div>

                <div className="right--element-teleguidance">
                    <motion.div
                        className="img--teleguidance"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                    >
                        <img src={hivonaut_pic} alt="hivonaut_pic" className='computer-vision-img-teleguidance' />
                    </motion.div>
                </div>
            </div>

            <div className="computer-vision-div">
                <div className="left--element-calibration">
                    <motion.div
                        className="img--calibration"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                    >
                        <img src={computer_vision} alt="computer_vision" className='computer-vision-img' />
                    </motion.div>
                </div>

                <div className="right--element-calibration">
                    <div className="logo-calibration">
                        <img src={hiverbtcs_calibration} alt="Logo" className='hiverbtcs_destination-tech' />
                    </div>
                    <div className="text-calibration">
                        <div className="calibration--title-computer">
                            COMPUTER VISION
                        </div>
                        <div className="calibration--parag-computer">
                            La Computer Vision permet à notre robots de comprendre les détails de leurs environnements. Par exemple, pour être capable de prédire si un piéton est susceptible de croiser son chemin.
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default TechDetail
