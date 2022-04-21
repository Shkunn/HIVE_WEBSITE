import './Comparaison.css'
import './ElementTableau'
import ElementTableau from './ElementTableau'
import { FiXCircle } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function Comparaison() {

    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 700) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className="comparaison-container">
            <div className="comparaison-title">
                Comparaison de HIVE <span style={{ fontFamily: 'Gilroy-ExtraBold' }}>aux livraisons traditionelles</span>
            </div>
            <div className="tableau-div-container">

                <div className="div-container-exemple--title">
                    <div className="container-all-stuff">

                        <div className="container-all-stuff--element">

                            <div className="div-text-exemple"></div>

                            {button &&
                                <div className="div-concurrent-title">
                                    Livraison traditionnelle
                                </div>
                            }

                            <div className="div-us-title">
                                HIVE
                            </div>

                        </div>

                        <div className="divider--container-exemple"></div>
                    </div>

                </div>


                <ElementTableau text='Livraison immédiate quand votre plat est prêt' />
                <ElementTableau text='Conteneur isotherme pendant tout le voyage' />
                <ElementTableau text='Une livraison en moins de 30 minutes, même au moment du rush' />
                <ElementTableau text='Une livraison unique et amusante' />

                <div className="div-container-exemple">
                    <div className="container-all-stuff">

                        <div className="container-all-stuff--element">

                            <div className="div-text-exemple">
                                Un contact direct avec les restaurants
                            </div>

                            {button &&
                                <div className="div-concurrent">
                                    <FiXCircle className='circle--icon' />
                                </div>
                            }

                            <div className="div-us">
                                <AiOutlineCheckCircle className='check--icon' />
                            </div>

                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Comparaison