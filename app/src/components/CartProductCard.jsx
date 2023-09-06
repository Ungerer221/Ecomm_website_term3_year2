import React, { useState, useEffect } from 'react'
import Axios from "axios";

import { BiXCircle } from 'react-icons/bi'

const CartProductCard = (props) => {

    const refreshCartProduct = () => {
        props.refreshCartProduct(true);
    }

    const [error, setError] = useState("");

    // deleting the product from the cart
    const deleteCartProduct = (e) => {
        // console.log(props.id);
        Axios.delete('http://localhost:5000/api/deleteCartProduct/' + props.id)
            .then(res => {
                console.log("deleted")
                refreshCartProduct()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            });
    }

    return (
        <div>
            {/* card */}
            <div className="co-item-card">
                <div className="co-card-left">
                    {/* column 1  */}
                    <div className="item-card-img"></div>
                    {/* column 2 */}
                    <div className="co-column-two">
                        <h1>{props.name}</h1>
                        <div className="co-item-size">XX</div>
                    </div>
                </div>
                <div className="co-card-right">
                    {/* column 3  */}
                    <div className="co-column-three">
                        <button onClick={deleteCartProduct} className="co-item-delete"><BiXCircle /></button>
                        <div>#00</div>
                        <div>R: {props.price}.00</div>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    );
};

export default CartProductCard