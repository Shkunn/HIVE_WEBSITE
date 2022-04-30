import './Form.css'
// import robot_frontview from '../../images/robot_side_view.jpg';
import emailjs from "emailjs-com"
import swal from 'sweetalert';

function Form() {

    const sendEmail = (e) => {
        e.preventDefault();

        const template_id = process.env.REACT_APP_TEMPLATE_ID

        emailjs.sendForm("hive_robotics_id", template_id, e.target, 'zWaaqMTgj71lrDzq6')
            .then((result) => {
                console.log(result.text);
                swal("Merci !", "Votre mail a été envoyé !", "success")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="form-container">
            <div className="leftside--form-container">
                <div className="title--form-container">
                    <div className="title-container">
                        <div className="title1" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
                            Prêt à rencontrer<span style={{ color: '#FF4D00', fontFamily: 'Gilroy-ExtraBold' }}> JUMBY</span> ?
                        </div>
                        <span style={{ marginTop: 12, fontFamily: 'Gilroy-ExtraBold', color: 'white' }}>Enregistre ton restaurant maintenant !</span>
                    </div>
                </div>

                <div className="form-div--form-container">
                    <div className="form-div">

                        <form className='form-grid' onSubmit={sendEmail}>
                            <label style={{ fontFamily: 'Gilroy-Light' }}>Nom du Commerce:
                                <input
                                    type="text"
                                    placeholder="La Cantina"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="business_name"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Poste Occupé:
                                <input
                                    type="text"
                                    placeholder="Gérant"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="job"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Prénom:
                                <input
                                    type="text"
                                    placeholder="Antoine"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="surname"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Nom:
                                <input
                                    type="text"
                                    placeholder="Dupond"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="name"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Numéro de Téléphone:
                                <input
                                    type="text"
                                    placeholder="0607080910"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="phone_number"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Adresse Email:
                                <input
                                    type="text"
                                    placeholder="Antoine.Dupond@gmail.com"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="email"
                                />
                            </label>

                            <label style={{ fontFamily: 'Gilroy-Light' }}>Code Postal:
                                <input
                                    type="text"
                                    placeholder="92000"
                                    required
                                    style={{ fontFamily: 'Gilroy-Light' }}
                                    name="postal"
                                />
                            </label>

                            <input
                                className='button-submit'
                                type="submit"
                                value="Envoyer le formulaire"
                            >
                            </input>

                        </form>

                    </div>

                </div>
            </div>
            {/* 
            <div className="robot-img--form-container">
                <img src={robot_frontview} alt="robot_frontview" className='robot_frontview-form' />
            </div> */}

        </div >
    )
}

export default Form