import React, { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const [itemValueTitle, setItemValueTitle] = useState(dataSlider[0].title)
    const [itemValuePara, setItemValuePara] = useState(dataSlider[0].subTitle)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>

            <div className="global-container--slider">
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                                    alt=''
                                />
                            </div>
                        )
                    })}

                </div>

                <div className="container-dots">
                    {dataSlider.map((item, index) => (
                        <div key={index} className='container-dots--map'>
                            <div
                                onClick={() => {
                                    moveDot(index + 1)
                                    setItemValueTitle(item.title)
                                    setItemValuePara(item.subTitle)
                                }}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                            >
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="text--dots">
                <div className="text--title--dot">
                    {itemValueTitle}
                </div>
                <div className="text--para--dot">
                    {itemValuePara}
                </div>
            </div>

        </>
    )
}
