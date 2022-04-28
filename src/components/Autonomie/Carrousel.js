import './Carrousel.css';
// import Slider from '../Slider/Slider';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';

// import dataSlider from './dataSlider'
// import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';
import { useState } from 'react';

const DATA = [
    [
        "MAPPING",
        "Nos robots se déplacent dans une map 3D préalablement construite par nos ingénieurs.",
    ],

    [
        "NAVIGATION",
        "Notre algorithme de navigation permet à nos robots de traiter de ses différents capteurs pour tracer le chemin le plus rapide et le plus sécurisé pour tous.",
    ],

    [
        "PERCEPTION",
        "JUMBY ne voit pas seulement les objects, ils les identifient. Il est capable de categoriser les piétons des voitures en temps réel."
    ],
    [
        "PREDICTION",
        "L'algorithme de prédiction utilise du machine learning pour anticiper les actions des piétons."
    ]
];

function createSlide(src) {
    return (
        <>
            <SwiperSlide
                className='carrousel-div-image'
            >
                <div className="carousel-wrapper">
                    <img className="robot--image-carousel" src={src} alt="" />
                </div>
            </SwiperSlide>
        </>
    );
}

function Carrousel() {
    const [index, setIndex] = useState(0)

    return (
        <div className="carrousel-global-div">

            <div className="title--carrousel-global-div">
                Une aventure qui commence <span style={{ fontFamily: 'Gilroy-ExtraBold' }}>bien avant les livraisons</span>
            </div>


            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="carroussel-image"
                onSlideChange={(swiperCore) => {
                    const {
                        activeIndex
                    } = swiperCore;
                    setIndex(activeIndex)
                }}
            >
                {createSlide(img1)}
                {createSlide(img2)}
                {createSlide(img3)}
                {createSlide(img4)}
            </Swiper>

            <div className="text--dots">
                <div className="text--title--dot">
                    {DATA[index][0]}
                </div>
                <div className="text--para--dot">
                    {DATA[index][1]}
                </div>
            </div>

        </div >
    );
};

export default Carrousel;