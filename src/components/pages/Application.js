import React, { useEffect, useState } from 'react'
import './Application.css'

function Application() {

    const [email, setEmail] = useState("");

    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 600) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    return (
        <div className="application--global-div">
            <div className="left--application">
                <div className="text-application">
                    Avez-vous déjà été <span style={{ color: '#FF4D00', fontFamily: 'Gilroy-ExtraBold' }}>livré</span> par un <span style={{ color: '#FF4D00', fontFamily: 'Gilroy-ExtraBold' }}>robot autonome</span> auparavent ?
                </div>
                <div className="subtitle-application">
                    Soyez alertés de la sortie de l'application pour faire parti du futur.
                </div>
                <div className="button-application-div">
                    <div className="text--button--application">
                        L'application est bientôt disponible !
                    </div>

                    <div className="button-application-form">
                        <form>
                            <label style={{ fontFamily: 'Gilroy-Light' }}>Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Antoine.Dupond@gmail.com"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                />
                            </label>

                            <button
                                className='button-application-form-but'
                                type="submit"
                                value="Envoyer le formulaire"
                            >
                                Alertez moi !
                            </button>
                        </form>

                    </div>

                </div>
            </div >

            {/* {button &&
                <div className="right--application">
                    <img src={mockup} alt="mockup" className='mockup' />
                </div>
            } */}
        </div >
    )
}

export default Application
