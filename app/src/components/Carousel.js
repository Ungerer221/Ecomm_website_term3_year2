import React, { useState, useEffect } from 'react'

import './Carousel.css'
// images
// import ImageOne from '../Images/imageOne.jpg';
import ImageTwo from '../Images/slidertwo.jpg';
// import ImageThree from '../Images/sliderthree.jpg;';
import ImgageFour from '../Images/sliderfour.jpg';

import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Slide } from 'react-toastify';

const Carousel = () => {
    // list of objects intended for the app.js 
    const slides =[
        {url:'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ]
    // const ImageSlider = ({ slides }) => {
    // }
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const sliderStyles = {
    //     height:'100%',
    //     position:'relative',
    // }
    // const slideStyles ={
    //     windth:'100%',
    //     height:'500px',
    //     borderRadius:'12px',
    //     backgroundPosition:'center',
    //     backgroundSize:'cover',
    //     backgroundImage:`${slides[currentIndex]}`,
    // }

    // const goToPrevious = () => {
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // }
    // const goToNext = () => {
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? slides.length + 1 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // }

    return (
        <div>
            <div className="carousel-container">
                {/* bootstrap carousel */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className="carousel-item active" style={{backgroundImage:`url(${slides[0].url})`}} >
                            <img src={ImageTwo} alt="" className="cr-image-one" ></img>
                        </div>
                        <div className="carousel-item">

                        </div>
                        <div className="carousel-item">

                        </div>
                    </div>
                    {/* buttons  */}
                    <div className="cr-btn-con">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            {/* icon  */}
                            <span className="carousel-control-prev-icon" aria-hidden="true" ><BiChevronLeft /></span>
                            {/* <span class="visually-hidden"></span> */}
                        </button>
                        {/* ---  */}
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            {/* icon  */}
                            <span className="carousel-control-next-icon" aria-hidden="true" ><BiChevronRight /></span>
                            {/* <span class="visually-hidden">Next</span> */}
                        </button>
                        {/* ---  */}
                    </div>
                    {/* ----  */}
                </div>
                {/* ---- END ---- */}
            </div>
        </div>
    );
}
export default Carousel