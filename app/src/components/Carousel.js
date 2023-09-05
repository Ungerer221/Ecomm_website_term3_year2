import React from "react";
import './Carousel.css'
import imageOne from '../Images/imageOne.jpg';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Carousel = () => {
    return (
        <div>
            <div className="carousel-container">
                {/* bootstrap carousel */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imageOne} alt="" className="cr-image-one" ></img>
                            {/* <div className="image-placeholder-1"></div> */}
                        </div>
                        <div className="carousel-item">
                            {/* <img src="..." class="d-block w-100" alt="..."> */}
                            {/* <div className="image-placeholder-2"></div> */}

                        </div>
                        <div className="carousel-item">
                            {/* <img src="..." class="d-block w-100" alt="..."> */}
                            {/* <div className="image-placeholder-3"></div> */}
                        </div>
                    </div>
                    {/* buttons  */}
                    <div className="cr-btn-con">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            {/* icon  */}
                            <span className="carousel-control-prev-icon" aria-hidden="true"><BiChevronLeft /></span>
                            {/* <span class="visually-hidden"></span> */}
                        </button>
                        {/* ---  */}
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            {/* icon  */}
                            <span className="carousel-control-next-icon" aria-hidden="true"><BiChevronRight /></span>
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