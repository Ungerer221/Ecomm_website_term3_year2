import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import './checkout.css'

// import { BiXCircle } from 'react-icons/bi'

import CartProductCard from "../components/CartProductCard";




function Checkout() {

    const [product, setProduct] = useState();
    const [updateProducts, setUpdateProducts] = useState();

    //? testing
    const [totalProductPrice, setTotalProductPrice] = useState();

    // PRODUCT
    const [ProductName, setProductName] = useState();
    const [ProductType, setProductType] = useState();
    const [ProductDescription, setProductDescription] = useState();
    const [ProductPrice, setProductPrice] = useState();
    // ---

    const [error, setError] = useState("");

    //  PRODUCT managemanet --- --- --- !!!
    useEffect(() => {
        Axios.get('http://localhost:5000/api/product/')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                let renderProducts = productData.map((item) => <CartProductCard key={item._id} id={item._id} name={item.name} type={item.type} description={item.description} price={item.price} />)

                setProduct(renderProducts);
                setUpdateProducts(false);

            })
            .catch(err => console.log(err));
    }, [updateProducts])

    return (
        <div className="checkout-main-con">
            <div className="checkout-con">

                {/* left side  */}
                <div className="co-left-con">
                    <h1>Checkout</h1>
                    <p>please fill the form to complete your order</p>
                    <div className="co-input-con">
                        {/* first name  */}
                        <div className="co-firstname-input">
                            <label for="first_name">First Name</label>
                            <input type="text" placeholder="First Name" name="first_name"></input>
                        </div>
                        {/* last name inpiut  */}
                        <div className="co-lastname-input">
                            <label for="last_name">Last Name</label>
                            <input type="text" placeholder="Last Name" name="last_name"></input>
                        </div>
                        {/* card methode  */}
                        <div className="co-cardtype-input">
                            <select className="co-cardtype-select" placeholder="Credit card / Debit Card">
                                <option>Credit</option>
                                <option>Debit</option>
                            </select>
                        </div>
                        {/* card info  */}
                        <div className="co-cardinfo-con">
                            {/* card number   */}
                            <div className="co-cardnumber-con">
                                <label for="card_number">Card Number</label>
                                <input type="number" name="card_number" placeholder="Card Number"></input>
                            </div>
                            {/* ccv number  */}
                            <div className="co-ccv-con">
                                <label for="ccv-num">CCV</label>
                                <input type="number" name="ccv-num" placeholder="000"></input>
                            </div>
                            {/* exipre date  */}
                            <div className="co-expire-con">
                                <label for="epire-date">Exipry Date</label>
                                <input type="number" name="expire-date" placeholder="00 / 00"></input>
                            </div>
                        </div>
                        {/* zip info  */}
                        <div className="co-other-con">
                            {/* zip code  */}
                            <div className="co-zip-con">
                                <label for="zip_code">Zip Code</label>
                                <input type="text" name="zip_code" placeholder="Zip Code"></input>
                            </div>
                            {/* city  */}
                            <div className="co-city-con">
                                <label for="city">City</label>
                                <input name="city" type="text" placeholder="City"></input>
                            </div>
                        </div>
                        {/* country  */}
                        <div className="co-country-con">
                            <label for="country">Country</label>
                            <input name="country" type="text" placeholder="Country"></input>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className="co-right-con">
                    {/* title  */}
                    <h1>Cart</h1>
                    {/* cart banners  */}
                    <div className="co-item-con">
                        {/* // * in the video the guy has a product.js file which holds the objects  */}
                        {/* //* we have a data base that holds the same kind of information */}
                        {/* this is looping through all of our products which is coming through in the formating of our cards  */}
                        {/* {product} */}
                        {product.map}
                    </div>
                    <p>Total:</p>
                    <button className="co-checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
}
export default Checkout