import './Advantage.css'
import robot_frontview from '../../images/MK3-white-paysage.jpg';
import MK3_allee from '../../images/MK3-allee.jpg';
import MK3_goldencar from '../../images/MK3-white.jpg';
import MK3_garden from '../../images/MK3-garden.jpg';

function Advantage() {
    return (
        <div className="advantage-container">
            <div className="title-div-advantage">
                <div className="title-advantage">
                    Expérimentez des livraisons parfaites
                </div>
                <div className="subtitle-advantage">
                    Evitez les maux de têtes !
                </div>
            </div>

            <div className="advantage-one-div">

                <div className="advantage-one-img">

                    <div className="img-one-div-advantage">
                        <img src={robot_frontview} alt="robot_frontview" className='image-classname-advantage' />
                    </div>

                </div>

                <div className="advantage-one-text-div">

                    <div className="advantage-one-text-position">

                        <div className="advantage-one-number">
                            1.
                        </div>
                        <div className="advantage-one-text">
                            Qualité améliorée
                        </div>
                        <div className="divider-advantage"></div>
                        <div className="advantage-one-subtext">
                            Votre nourriture quitte le restaurant dès lors qu'elle est prête pour préserver sa saveur.
                        </div>

                    </div>

                </div>

            </div>

            <div className="advantage-two-div">


                <div className="advantage-two-text-div">

                    <div className="advantage-two-text-position">

                        <div className="advantage-two-number">
                            2.
                        </div>
                        <div className="advantage-two-text">
                            Economiser
                        </div>
                        <div className="divider-advantage"></div>
                        <div className="advantage-two-subtext">
                            20-50% de moins que les services de livraison traditionnel
                        </div>

                    </div>

                </div>

                <div className="advantage-two-img">

                    <div className="img-two-div-advantage">
                        <img src={MK3_allee} alt="robot_frontview" className='image-classname-advantage' />
                    </div>

                </div>

            </div>

            <div className="advantage-one-div">

                <div className="advantage-one-img">
                    <div className="img-one-div-advantage">
                        <img src={MK3_goldencar} alt="robot_frontview" className='image-classname-advantage' />
                    </div>
                </div>

                <div className="advantage-one-text-div">

                    <div className="advantage-one-text-position">

                        <div className="advantage-one-number">
                            3.
                        </div>
                        <div className="advantage-one-text">
                            Meilleur service
                        </div>
                        <div className="divider-advantage"></div>
                        <div className="advantage-one-subtext">
                            Plus de confusions, de commandes qui n'arrivent pas ou incomplètes.
                        </div>

                    </div>

                </div>

            </div>

            <div className="advantage-two-div">


                <div className="advantage-two-text-div">

                    <div className="advantage-two-text-position">

                        <div className="advantage-two-number">
                            4.
                        </div>
                        <div className="advantage-two-text">
                            Experience Unique
                        </div>
                        <div className="divider-advantage"></div>
                        <div className="advantage-two-subtext">
                            Une expérience que vous n'aurez nulle part ailleurs
                        </div>

                    </div>

                </div>

                <div className="advantage-two-img">
                    <div className="img-two-div-advantage">
                        <img src={MK3_garden} alt="robot_frontview" className='image-classname-advantage' />
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Advantage