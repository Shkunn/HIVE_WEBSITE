import './Price.css';
import logo_laDef from '../images/Inno_la_defense.png';
import logo_moovje from '../images/Moovje.png';
import logo_cnam from '../images/cnam.png';

function Price() {
    return (
        <div className="price-global-div">
            <div className="price-title">
                Prix remportés
            </div>

            <div className='global-price-div'>

                <div className="price-div">
                    <div className="price-content-logo">
                        <img src={logo_laDef} alt="Logo" className='logo' />
                    </div>

                    <div className="price-content-title">
                        Prix de l'Innovation 2021
                        <span style={{ fontFamily: 'Gilroy-Light' }}>Paris Ouest La Défense</span>
                    </div>

                    <div className="price-content-desc">
                        1er place
                    </div>

                </div>

                <div className="price-div">
                    <div className="price-content-logo">
                        <img src={logo_moovje} alt="Logo" className='logo' />
                    </div>

                    <div className="price-content-title">
                        MOOVJE Editon 11
                    </div>

                    <div className="price-content-desc">
                        Finaliste
                    </div>

                </div>

                <div className="price-div">
                    <div className="price-content-logo">
                        <img src={logo_cnam} alt="Logo" className='logo' />
                    </div>

                    <div className="price-content-title">
                        Prix de l'Innovation 2021
                        <span style={{ fontFamily: 'Gilroy-Light' }}>CNAM Incubateur</span>
                    </div>

                    <div className="price-content-desc">
                        1er place
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Price
