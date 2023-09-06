import React from "react";

import { BiXCircle } from 'react-icons/bi'

const CartProductCard = (props) => {
    return (
        <div>
            {/* card */}
            <div className="co-item-card">
                <div className="co-card-left">
                    {/* column 1  */}
                    <div className="item-card-img"></div>
                    {/* column 2 */}
                    <div className="co-column-two">
                        <h1>Product name</h1>
                        <div className="co-item-size">XX</div>
                    </div>
                </div>
                <div className="co-card-right">
                    {/* column 3  */}
                    <div className="co-column-three">
                        <button className="co-item-delete"><BiXCircle /></button>
                        <div>#00</div>
                        <div>R00.00</div>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    );
};

export default CartProductCard