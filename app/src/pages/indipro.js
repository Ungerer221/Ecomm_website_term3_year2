import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import './indipro.css'
import { BiHeart, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube, BiBasket } from 'react-icons/bi'

import Image5 from '../Images/shoes2.jpg'


function Indipro() {

    // const [data, setData] = useState(null)
    const [data, setData] = useState()

    const [product, setProduct] = useState();
    const [updateProducts, setUpdateProducts] = useState();


    // PRODUCT
    const [ProductName, setProductName] = useState();
    const [ProductType, setProductType] = useState();
    const [ProductDescription, setProductDescription] = useState();
    const [ProductStock, setProductStock] = useState();
    const [ProductPrice, setProductPrice] = useState();
    // ---

    const [error, setError] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:5000/api/product/:id')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                // let renderProducts = productData.map((item) => <ProductPageCard key={item._id} id={item._id} name={item.name} type={item.type} description={item.description} stock={item.stock} price={item.price} />)
                let renderProducts = productData.map((item)=> item.name)
                setProduct(renderProducts);
                setUpdateProducts(false);

            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:5000/api/product/')
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(data)

    if (!data) return null;


    // ? figure out how to call info of the product card that the view button is clidded and display it on this page so figure out how to call specific data without data[0].name
    // ? learn more on how to use map function without an item

    return (
        <div className="indipro-main-con">
            <div className="indipro-product-con">
                {/* row 1 */}
                <div className="indipro-row-1">
                    <h1 style={{textTransform:'capitalize'}}>{data[0].name}</h1>
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
                        <img src={Image5} alt=""  style={{width:'700px'}}></img>
                    </div>
                    <div className="indipro-2-info-con">
                        {/* description  */}
                        <div className="indipro-description-con">
                            <h1>Description:</h1>
                            <p>
                                {data[0].description}.
                            </p>
                        </div>
                        {/* what you get con */}
                        <div className="indipro-content-con">
                            {/* title  */}
                            <h1 style={{textTransform:'capitalize'}}>what you get</h1>
                            <p style={{textTransform:'capitalize'}}>{data[0].name}</p>
                            {/* quantity  */}
                            <div className="indipro-quantity-con">
                                <p>quantity:{data[0].stock}</p>
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
                                <p>Total Price: R{data[0].price}.00</p>
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
export default Indipro