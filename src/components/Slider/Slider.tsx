import React, { useState, useRef, useEffect, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import { sliderArrowLeft, sliderArrowRight, slideOneBg, slideTwoBg, slideTreeBg, slideTreeDopIcon, slideFourBg, slideFiveBg } from "src/assets";
import uuid from "react-uuid";
import Slide from "src/components/Slider/Slide/Slide";
import { DESKTOP_WIDTH } from "src/App";
import Slider from 'react-slick'

const SliderComponent: React.FC = () => {

    // This is HARDCODE. Here should be data from server.
    const slides: Array<{
        title: { value: string, color?: string },
        description?: string,
        src: string,
        imgHeight: number,
        dopSrc?: string
    }> = [
            {
                title: {
                    value: 'Avoid plastic'
                },
                src: slideOneBg,
                imgHeight: 156
            },
            {
                title: {
                    value: 'Choose organic'
                },
                src: slideTwoBg,
                imgHeight: 213
            },
            {
                title: {
                    value: 'Save water',
                    color: '#000000'
                },
                description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
                src: slideTreeBg,
                imgHeight: 272,
                dopSrc: slideTreeDopIcon
            },
            {
                title: {
                    value: 'Plant trees'
                },
                src: slideFourBg,
                imgHeight: 185
            },
            {
                title: {
                    value: 'Save energy',
                },
                src: slideFiveBg,
                imgHeight: 156
            }
        ]



    const slider = useRef<any>()
    const [currentSlider, setCurrentSlider] = useState<number>(0)
    const SLIDER_TO_SHOW: number = parseInt(DESKTOP_WIDTH) < document.body.offsetWidth ? 3 : 1;
    const SLIDER_LENGTH: number = slides.length

    const leftArrowHandler = () => {
        if (currentSlider === 0) {
            setCurrentSlider(() => {
                slider.current.slickPrev()
                return SLIDER_LENGTH - 1
            })
        } else {
            slider.current.slickGoTo(currentSlider - 1)
        }
    }

    const rightArrowHandler = () => {
        if (currentSlider === SLIDER_LENGTH - 1) {
            setCurrentSlider(() => {
                slider.current.slickNext()
                return 0
            })
        } else {
            slider.current.slickGoTo(currentSlider + 1)
        }
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: SLIDER_TO_SHOW,
        slidesToScroll: 1,
        initialSlide: currentSlider,
        afterChange: function (index: number) {
            setCurrentSlider(index)
        }
    }

    return (
        <div className={'slider'} id={'slider'}>
            <Slider ref={slider} {...settings}>
                {slides.map(slide => {
                    return <Slide
                        key={uuid()}
                        title={slide.title}
                        src={slide.src}
                        imgHeight={slide.imgHeight}
                        description={slide.description}
                        dopSrc={slide.dopSrc}
                    />
                })}
            </Slider>
            <div className={'slider__menu'}>
                <img
                    onClick={leftArrowHandler}
                    className={'slider__menu-arrow slider__menu-arrow_left'}
                    src={sliderArrowLeft} alt="Slider arrow left"
                />
                <div className={'slider__menu-counter'}>
                    {currentSlider + 1}<span> / {SLIDER_LENGTH}</span>
                </div>
                <img
                    onClick={rightArrowHandler}
                    className={'slider__menu-arrow slider__menu-arrow_right'}
                    src={sliderArrowRight} alt="Slider arrow right"
                />
            </div>
        </div>
    )
}

export default SliderComponent;