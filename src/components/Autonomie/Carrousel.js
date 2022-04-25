import './Carrousel.css';
import Slider from '../Slider/Slider';


function Carrousel() {
    return (
        <div className="carrousel-global-div">

            <div className="title--carrousel-global-div">
                Une aventure qui commence <span style={{fontFamily: 'Gilroy-ExtraBold'}}>bien avant les livraisons</span>
            </div>

            <div className="carroussel-image">
                <Slider />
            </div>
        </div>
    )
}

export default Carrousel
