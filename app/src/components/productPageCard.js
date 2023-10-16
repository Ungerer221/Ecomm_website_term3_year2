import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";

import './productPageCard.css'
import ImageAlt from '../Icons/imageAlt.svg'
import { Nav } from 'react-bootstrap';

import { BiCart } from "react-icons/bi";


// MUI
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// * importing the shop context
// * from the video
import { ShopContext } from '../context/shopContext'
import axios from "axios";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ProductPageCard = (props) => {

    // * Modal variables
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const {id, name,price} = props.data;

    // this will when consol.log with the btn onclick then its shows the props data
    const [data, setData] = useState(props)

    const [product, setProduct] = useState();
    const [updateCartProducts, setUpdateCartProducts] = useState();

    const [ProductName, setProductName] = useState(props.name);
    const [ProductType, setProductType] = useState(props.type);
    const [ProductDescription, setProductDescription] = useState(props.description);
    const [ProductStock, setProductStock] = useState(props.stock);
    const [ProductSize, setProductSize] = useState(props.size);
    const [ProductPrice, setProductPrice] = useState(props.price);
    // console.log(props.data);

    const { addToCart } = useContext(ShopContext);
    // * video stuff end

    const [error, setError] = useState("");

    // * adding by creating the same object in the cart database. 

    const getCartProductName = (e) => {
        let value = e.target.value;
        setProductName(props.name);
    }
    const getCartProductType = (e) => {
        let value = e.target.value;
        setProductType(props.type);
    }
    const getCartProductDescription = (e) => {
        let value = e.target.value;
        setProductDescription(props.description);
    }
    const getCartProductStock = (e) => {
        let value = e.target.value;
        setProductStock(props.stock)
    }
    const getCartProductSize = (e) =>{
        let value = e.target.value;
        setProductSize(props.size)
    }
    const getCartProductPrice = (e) => {
        let value = e.target.value;
        setProductPrice(props.price);
    }

    const addCartProductToCart = (e) => {
        let payload = {
            name: ProductName,
            type: ProductType,
            description: ProductDescription,
            stock: ProductStock,
            size: ProductSize,
            price: ProductPrice,
        }

        Axios.post('http://localhost:5000/api/addCartProduct/', payload)
            .then(res => {
                console.log(res.data)
                setUpdateCartProducts(true);
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }

    //to get product info for the Indipro page
    // const getSingleProduct = (g) => {

    //     useEffect(() => {

    //         Axios.get('http://localhost:5000/api/product/:id')
    //             .then((response) => {
    //                 setData(response.data)
    //             }).catch((error) => {
    //                 console.log(error)
    //             })
    //     }, [])
    // }


    return (
        <div>

            {/* <Modal */}
            {/* open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > */}
            {/* <Box sx={style}> */}
            <div className="productPageCard-con">
                {/* image  */}
                <div className="productPageCard-img">
                    <img src={ImageAlt} alt=""></img>
                </div>
                {/* text  */}
                <div className="productPageCard-content">
                    <div className="productPageCard-info">
                        <h1>{props.name}</h1>
                        <p>{props.type}</p>
                        <p>{props.description}</p>
                        <p>Stock left: {props.stock}</p>
                        {/* new  */}
                        <p>sizes Available:{props.size}</p>
                        {/* ---  */}
                        <h2>R:{props.price}</h2>
                    </div>
                    <div className="productPageCard-buttons">
                        {/* <button>add to cart</button> */}
                        <Nav.Link href="/indipro" className="">
                            <Button variant="contained" sx={{ padding: "10px 80px", borderRadius: "12px", backgroundColor: "#28A2D7" }}>View</Button>
                        </Nav.Link>

                        {/* // * modal box  */}



                        {/* // todo this is the button that will add to cart  can use context api*/}
                        {/* // ? check the video to see where the import is going */}
                        {/* // * the button logs the name of the item its clicked */}
                        <Button onClick={() => addCartProductToCart(console.log(props.name))} sx={{ fontSize: "24px" }}><BiCart /></Button>
                    </div>
                </div>
            </div>
            {/* </Box> */}
            {/* </Modal> */}
        </div>
    )
}
export default ProductPageCard