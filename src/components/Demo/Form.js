import { useState } from 'react';
import './Form.css'
import robot_frontview from '../../images/robot_side_view.jpg';

function Form() {

    const [businessName, setBusinessName] = useState("");
    const [job, setJob] = useState("");
    const [prenom, setPrenom] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [postal, setPostal] = useState("");

    return (
        <div className="form-container">
            <div className="leftside--form-container">
                <div className="title--form-container">
                    <div className="title-container">
                        <div className="title1" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
                            Prêt à rencontrer<span style={{ color: '#FF4D00', fontFamily: 'Gilroy-ExtraBold' }}> KODA</span> ?
                        </div>
                        <span style={{ marginTop: 12, fontFamily: 'Gilroy-ExtraBold' }}>Enregistre ton restaurant maintenant !</span>
                    </div>
                </div>

                <div className="form-div--form-container">
                    <div className="form-div">

                        <form className='form-grid'>
                            <label style={{fontFamily: 'Gilroy-Light'}}>Nom du Commerce:
                                <input
                                    type="text"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    placeholder="La Cantina"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Poste Occupé:
                                <input
                                    type="text"
                                    value={job}
                                    onChange={(e) => setJob(e.target.value)}
                                    placeholder="Gérant"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Prénom:
                                <input
                                    type="text"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    placeholder="Antoine"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Nom:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Dupond"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Numéro de Téléphone:
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="0607080910"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Adresse Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Antoine.Dupond@gmail.com"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <label style={{fontFamily: 'Gilroy-Light'}}>Code Postal:
                                <input
                                    type="text"
                                    value={postal}
                                    onChange={(e) => setPostal(e.target.value)}
                                    placeholder="92000"
                                    required
                                    style={{fontFamily: 'Gilroy-Light'}}
                                />
                            </label>

                            <input
                                className='button-submit'
                                type="submit"
                                value="Envoyer le formulaire"
                                onClick={() => {
                                    console.log(businessName, job, name, prenom, phone, email, postal);
                                }}
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