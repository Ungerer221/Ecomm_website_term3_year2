import React from "react";
import '../components/ProductCarousel.css'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

// import { imageOne } from 'app/src/Images/imageOne.jpg';

const product_carousel = () => {
    return (
        <div>
            <div className="product-carousel-container">
                {/* bootstrap carousel */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {/* <img src={imageOne} alt="" class="d-block w-100" ></img> */}
                            <div className="product-image-placeholder-1"></div>
                        </div>
                        <div class="carousel-item">
                            {/* <img src="..." class="d-block w-100" alt="..."> */}
                            {/* <div className="image-placeholder-2"></div> */}

                        </div>
                        <div class="carousel-item">
                            {/* <img src="..." class="d-block w-100" alt="..."> */}
                            {/* <div className="image-placeholder-3"></div> */}
                        </div>
                    </div>
                    {/* previous button  */}
                    <button class="product-carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        {/* icon  */}
                        <span class="product-carousel-control-prev-icon" aria-hidden="true">
                            <BiChevronLeft/>
                        </span>
                        <span class="visually-hidden"></span>
                    </button>
                    {/* next button  */}
                    <button class="product-carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        {/* icon  */}
                        <span class="product-carousel-control-next-icon" aria-hidden="true">
                            <BiChevronRight/>
                        </span>
                        <span class="visually-hidden"></span>
                    </button>
                </div>
                {/* ---- END ---- */}
            </div>
        </div>
    );
}
export default product_carousel