import React from "react";

//style sheet
import './cart.css'

import { BiXCircle } from 'react-icons/bi'

function Cart() {
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
                        <button className="co-checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart