import Axios from 'axios';
import React, { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';




const ProductCard = (props) => {

    const [ProductName, setProductName] = useState(props.name);
    const [ProductType, setProductType] = useState(props.type);
    const [ProductDescription, setProductDescription] = useState(props.description);
    const [ProductStock, setProductStock] = useState(props.stock);
    const [ProductPrice, setProductPrice] = useState(props.price);

    const [error, setError] = useState("");

    const refreshProduct = () => {
        props.refreshProduct(true);
    }

    const deleteProduct = (e) => {
        console.log(props.id);
        Axios.delete('http://localhost:5000/api/deleteProduct/' + props.id)
            .then(res => {
                console.log("delete")
                refreshProduct()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            });
    }

    return (
        <div>
            <Card sx={{ minWidth: 200, minHeight: "300px", backgroundColor: "#CBCBCB", maxWidth: 300 }}>
                <CardContent spacing={5}>
                    {/* {user} */}
                    <Typography sx={{ fontSize: 18, }} color="black" gutterBottom>
                        Product
                    </Typography>
                    <Typography variant="h5" component="div">
                        Name: {props.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        <Chip label={props.type} variant='outlined' sx={{ background: "#fff" }}></Chip>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Description: {props.description}
                    </Typography>
                    <Typography variant="body2">
                        Stock: {props.stock}
                    </Typography>
                    <Typography variant="body2">
                        Price: {props.price}
                    </Typography>
                    <Typography component="legend">Rate:</Typography>
                    <Rating
                        name="simple-controlled"
                        // value={value}
                        onChange={(event, newValue) => {
                            // setValue(newValue);
                        }}
                    />
                </CardContent>
                <CardActions>
                    <Stack spacing={2} sx={{ margin: "auto" }}>
                        <Button variant="contained" size="small" sx={{ margin: "auto" }}>Update</Button>
                        <Button onClick={() => deleteProduct()} variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard
