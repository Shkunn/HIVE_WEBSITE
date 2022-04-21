import './ElementTableau.css'
import { FiXCircle } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function ElementTableau({ text }) {

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

        <div className="div-container-exemple">
            <div className="container-all-stuff">

                <div className="container-all-stuff--element">

                    <div className="div-text-exemple">
                        {text}
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

                <div className="divider--container-exemple"></div>
            </div>

        </div>
    )
}

export default ElementTableau