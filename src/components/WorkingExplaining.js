import './WorkingExplaining.css'
import hiverbtcs_hivonauts from '../images/Pngs/black/hiverbtcs_account-0.png';
import hiverbtcs_cooking from '../images/Pngs/black/hiverbtcs_cooking-0.png';
import hiverbtcs_destination from '../images/Pngs/black/hiverbtcs_destination-0.png';

function WorkingExplaining() {
    return (
        <div className="global-div" id="workingExplaining">
            <div className="title">
                Comment fonctionne notre service ?
            </div>
            <div className="inner-div">

                <div className="steps">

                    <div className="image--steps">
                        <div className="image--steps--img">
                            <img src={hiverbtcs_hivonauts} alt="Logo" className='logo-working-ex' />
                        </div>
                    </div>

                    <div className="title--steps">
                        Le client passe une commande
                    </div>

                    <div className="paragraphe--steps">
                        KODA roule jusqu'au restaurant pour récupérer la commande
                    </div>

                </div>

                <div className="steps">
                    <div className="image--steps">
                        <div className="image--steps--img">
                            <img src={hiverbtcs_cooking} alt="Logo" className='logo-working-ex' />
                        </div>
                    </div>

                    <div className="title--steps">
                        Le restaurateur remplit KODA
                    </div>

                    <div className="paragraphe--steps">
                        Pas de perte de temps, dès que le plat est prêt le restaurateur remplit KODA
                    </div>
                </div>

                <div className="steps">
                    <div className="image--steps">
                        <div className="image--steps--img">
                            <img src={hiverbtcs_destination} alt="Logo" className='logo-working-ex' />
                        </div>
                    </div>

                    <div className="title--steps">
                        KODA est prêt pour livrer
                    </div>

                    <div className="paragraphe--steps">
                        KODA roule jusqu'au client en 15 minutes ou moins !
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkingExplaining
