import React from "react";
import './indipro.css'
import { BiHeart, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube, BiBasket } from 'react-icons/bi'


function indipro() {
    return (
        <div className="indipro-main-con">
            <div className="indipro-product-con">
                {/* row 1 */}
                <div className="indipro-row-1">
                    <h1>Product Name</h1>
                    <div className="indipro-row1-social-con">
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                        <BiLogoYoutube />
                    </div>
                </div>
                {/* row 2 */}
                <div className="indipro-row-2">
                    <div className="indipro-2-img-con">
                        {/* <img src="" alt=""></img> */}
                    </div>
                    <div className="indipro-2-info-con">
                        {/* description  */}
                        <div className="indipro-description-con">
                            <h1>Description:</h1>
                            <p>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        {/* what you get con */}
                        <div className="indipro-content-con">
                            {/* title  */}
                            <h1>what you get</h1>
                            <p>Item Name</p>
                            {/* quantity  */}
                            <div className="indipro-quantity-con">
                                <p>quantity</p>
                                {/* input  */}
                                <div className="indipro-quiatity-input">
                                    <input type="number" placeholder="0"></input>
                                </div>
                            </div>
                            {/* size  */}
                            <div className="indipro-size-con">
                                <p>Size:</p>
                                <div className="size-selecter-con">
                                    <button className="indipro-size-btn">XS</button>
                                    <button className="indipro-size-btn">S</button>
                                    <button className="indipro-size-btn">M</button>
                                    <button className="indipro-size-btn">L</button>
                                    <button className="indipro-size-btn">XL</button>
                                </div>
                            </div>
                            {/* color  */}
                            <div className="indipro-color-selector-con">
                                <p>Color:</p>
                                <div className="indipro-color-select">
                                    <button className="color-select-shape-1"></button>
                                    <button className="color-select-shape-2"></button>
                                    <button className="color-select-shape-3"></button>
                                </div>
                            </div>
                            {/* total price  */}
                            <div className="indipro-totalPrice">
                                <p>Total Price: R00.00</p>
                            </div>
                            {/* add to cart button  */}
                            <div className="indipro-btn-con">
                                <button className="indipro-addtocart-btn">
                                    <div className="indipro-addtocart-icon"><BiBasket /></div>
                                    <p>Add To Cart</p>
                                </button>
                                <button className="indipro-addwishlist-btn">
                                    <div className="indipro-addwishlist-icon"><BiHeart /></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row 3 */}
                <div className="indipro-row-3">

                </div>
            </div>
        </div>
    );
}
export default indipro