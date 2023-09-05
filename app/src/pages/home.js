import React, { useState, useEffect } from 'react'
import Axios from 'axios';


// import Navbar from './components/navbar';
import Carousel from '../components/Carousel';
import './home.css'
import { BiBookmark, BiCart } from "react-icons/bi";

// backgrounds and images 
import bannerBackground from '../Icons/bannerBackground.svg'
import threeDShape from '../Images/3DShape.png'
import triangleClone from '../Images/triangleclone.png'

import ImageAlt from '../Icons/imageAlt.svg'

// Importing toastify module
// import { toast } from 'react-toastify';
// toast-configuration method,
// it is compulsory method.
// toast.configure()

import Toastynote from '../components/toastnote'

// sline 
import Spline from '@splinetool/react-spline';

// MUI 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





function Home() {

    const [product, setProduct] = useState();
    const [updateProducts, setUpdateProducts] = useState();


    const [data, setData] = useState(null)

    // PRODUCT
    const [ProductName, setProductName] = useState();
    // const [ProductName, setProductName] = useState(data.name);

    const [ProductType, setProductType] = useState();
    const [ProductDescription, setProductDescription] = useState();
    const [ProductPrice, setProductPrice] = useState();
    // ---


    const [error, setError] = useState("");

    //  PRODUCT managemanet --- --- --- !!!
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

    return (
        <div className='App'>
            {/* <Navbar /> */}
            <Carousel />

            {/* section one  */}
            <div className='home-section-one'>

                {/* text con  */}
                <div className='text-con-two'>
                    <h1 className='title-two'>New Collections</h1>
                    <p>Check Ui for the Cards</p>
                </div>
                {/* ---- END ---- */}

                <div className='sectwo-banner-con'>
                    <div className='banner-card'>
                        <h1>Hoodies</h1>
                        <img src={bannerBackground} alt=""></img>
                    </div>
                    <div className='banner-card'>
                        <h1>shirts</h1>
                        <img src={bannerBackground} alt=""></img>
                    </div>
                    <div className='banner-card'>
                        <h1>pants</h1>
                        <img src={bannerBackground} alt=""></img>
                    </div>
                </div>
            </div>
            {/* section one end  */}

            {/* testing  */}
            {/* <Toastynote /> */}

            {/* section two */}
            <div className='section-two-con'>
                <div className='divider-line'></div>
                <div className='sectwo-text-con'>
                    <h1>special order</h1>
                    <p>Items shown here are currently on special!</p>
                </div>

                {/* !new  */}
                {/* new contaner display  */}
                <div className='home-specials-display-con'>
                    {/* top row  */}
                    <div className='home-specials-row1'>
                        <div className='home-specials-row1-img'>
                            <img src={ImageAlt} alt=''></img>
                        </div>
                        <h1>{data[0].name}</h1>
                    </div>
                    {/* 2nd row  */}
                    <div className='home-specials-row2'>
                        {/* col 1 */}
                        <div className='home-specials-column1'>
                            <div className='home-specials-column1-img'>
                                <img src={ImageAlt} alt=''></img>
                            </div>
                            <h1>{data[1].name}</h1>
                        </div>
                        {/* col 2 */}
                        <div className='home-specials-column2'>
                            {/* row 1 */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[2].name}</h1>
                            </div>
                            {/* row 2  */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[3].name}</h1>
                            </div>
                        </div>
                    </div>
                    {/* 3rd row  */}
                    <div className='home-specials-row3'>
                        <div className='home-specials-column2'>
                            {/* row 1 */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[4].name}</h1>
                            </div>
                            {/* row 2  */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[5].name}</h1>
                            </div>
                        </div>
                        <div className='home-specials-column1'>
                            <div className='home-specials-column1-img'>
                                <img src={ImageAlt} alt=''></img>
                            </div>
                            <h1>{data[6].name}</h1>
                        </div>
                    </div>
                    {/* 4th row  */}
                    <div className='home-specials-row4'>
                        {/* col 1 */}
                        <div className='home-specials-column1'>
                            <div className='home-specials-column1-img'>
                                <img src={ImageAlt} alt=''></img>
                            </div>
                            <h1>{data[7].name}</h1>
                        </div>
                        {/* col 2 */}
                        <div className='home-specials-column2'>
                            {/* row 1 */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[8].name}</h1>
                            </div>
                            {/* row 2  */}
                            <div className='home-specials-col2'>
                                <div className='home-specials-col2-img'>
                                    <img src={ImageAlt} alt=''></img>
                                </div>
                                <h1>{data[9].name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section two end  */}

            {/* section 3 */}
            <div className='section-three-con'>
                <div className='divider-line'></div>

                <div className='about-us-con'>
                    <div className='aboutus-text-con'>
                        <h2>More</h2>
                        <h1>About US</h1>
                    </div>
                    <div className='about-us-visual'>
                        {/* <Spline scene="https://prod.spline.design/d07mB059Sa-8lzjf/scene.splinecode" /> */}
                        <img src={triangleClone} alt=''></img>
                    </div>
                </div>

            </div>
            {/* end of app  */}
        </div>
    );
}

export default Home;
