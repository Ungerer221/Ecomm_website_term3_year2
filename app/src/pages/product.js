import React, { useState, useEffect } from 'react'
import Axios from 'axios';

//carousel
import ProductCarousel from '../components/ProductCarousel'
//style sheet
import '../pages/product.css'

// card import 
import ProductPageCard from "../components/productPageCard";

// image
import bannerBackground from '../Icons/bannerBackground.svg'


// icons 
import { BiHeart } from 'react-icons/bi'
// bootstrap 
// import bootstrap from "react-bootstrap"
import { Nav } from 'react-bootstrap';

// toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// --- imports end ---

// MUI 
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



function Product() {

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

    //  PRODUCT managemanet --- --- --- !!!
    useEffect(() => {
        Axios.get('http://localhost:5000/api/product/')
            .then(res => {
                let productData = res.data;
                console.log(productData);

                let renderProducts = productData.map((item) => <ProductPageCard key={item._id} id={item._id} name={item.name} type={item.type} description={item.description} stock={item.stock} price={item.price} />)

                setProduct(renderProducts);
                setUpdateProducts(false);

            })
            .catch(err => console.log(err));
    }, [updateProducts])

    // ---

    // toast notification const 
    // const notify = () => {
    //     toast("Item added to wishlist!", {
    //         position: "top-right",
    //         autoClose: 1500,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "colored",
    //     });
    // };

    // * from video where he is working in the shop file see bottom 

    return (
        <div className="product-main-con">
            <div className="product-section-one">
                <div className="product-carousel">
                    <ProductCarousel />
                </div>
            </div>

            {/* catagorie select container start  */}
            <div className="product-catagorie-con">
                {/* title  */}
                <div className="pro-cat-title-con">
                    <div className='pro-title-divider-line'></div>
                    <h1>Clothing</h1>
                    <div className='pro-title-divider-line'></div>
                </div>
                {/* nav  */}
                <div className="pro-cat-select-con">
                    <ul>
                        <li>hoodies</li>
                        <li>t-shirts</li>
                        <li>pants</li>
                        <li>jerseys</li>
                        <li>shoes</li>
                        <li>beanies</li>
                        <li>socks</li>
                        <li>gloves</li>
                        <li>jackets</li>
                    </ul>
                </div>
            </div>
            {/* end  */}

            {/* product card container strat  */}
            <div className="pro-card-container">
                {product}
            </div>
            {/* product card container end  */}


            <div className="pro-seemore-btn">
                <button>See More</button>
            </div>


            {/* brand ctagorie section  */}
            <div className="product-catagorie-brand-con">
                {/* title  */}
                <div className="pro-cat-title-brand-con">
                    <div className='pro-title-divider-line'></div>
                    <h1>Brand</h1>
                    <div className='pro-title-divider-line'></div>
                </div>
            </div>

            {/* Banners */}
            <div className="pro-banner-card-con">
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>Nike</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>adidas</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>under armor</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>vans</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>cotton-on</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
                {/* banner  */}
                <div className="pro-banner-card">
                    <h1>h&m</h1>
                    <img src={bannerBackground} alt=""></img>
                </div>
            </div>

            {/* toast container  */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            {/* // todo NEW !!!! */}
            {/* //! the stuff from video */}
            {/* <h1>from video</h1> */}
            {/* <div className=''> {product.map((product))}</div> */}

        </div>
    )
}
export default Product