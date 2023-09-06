import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './admin.css'

// import ProductCard from '../components/ProductCard';
import UserCard from '../components/UserCard'
import ProductCard from '../components/ProductCard';


// material UI
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

// select menu MUI 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// --- --- ---
function Admin() {
  // ---

  const [user, setUsers] = useState();
  const [updateUsers, setUpdateUsers] = useState(false);

  const [product, setProduct] = useState();
  const [updateProducts, setUpdateProducts] = useState();

  // MUI SELECT 
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setProductType(event.target.value);
  };
  // ---
  // USER 
  const [UserName, setUserName] = useState();
  const [UserSurname, setUserSurname] = useState();
  const [UserUsername, setUserUsername] = useState();
  const [UserEmail, setUserEmail] = useState();
  const [UserPassword, setUserPassword] = useState();

  // PRODUCT
  const [ProductName, setProductName] = useState();
  const [ProductType, setProductType] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const [ProductPrice, setProductPrice] = useState();
  // ---

  const [error, setError] = useState("");


  //Refersh Users
  const refreshUsers = (state) => {
    setUpdateUsers(state);
  }
  // refresh product 
  const refreshProducts = (state) => {
    setUpdateProducts(state)
  }

  // user axios 
  useEffect(() => {
    Axios.get('http://localhost:5000/api/user/')
      .then(res => {
        let userData = res.data;
        console.log(userData);

        let renderUsers = userData.map((item) => <UserCard refreshUsers={refreshUsers} key={item._id} id={item._id} name={item.name} surename={item.surename} username={item.username} email={item.email} password={item.password} />)

        setUsers(renderUsers);
        setUpdateUsers(false);
      })
      .catch(err => console.log(err));
  }, [updateUsers])

  const getName = (e) => {
    let value = e.target.value;
    setUserName(value);
  }
  const getSurname = (e) => {
    let value = e.target.value;
    setUserSurname(value);
  }
  const getUsername = (e) => {
    let value = e.target.value;
    setUserUsername(value);
  }
  const getEmail = (e) => {
    let value = e.target.value;
    setUserEmail(value);
  }
  // maybe add wallet 
  const getPassword = (e) => {
    let value = e.target.value;
    setUserPassword(value);
  }

  //  ! note 

  const addUser = (e) => {

    // payload (why???) !!! !!!
    let payload = {
      name: UserName,
      surname: UserSurname,
      username: UserUsername,
      // wallet: UserWallet,
      email: UserEmail,
      password: UserPassword,
    }
    console.log(payload)

    // axios requiest !!! !!!
    Axios.post('http://localhost:5000/api/addUser/', payload)
      .then(res => {
        console.log(res.data)
        setUpdateUsers(true);

      })
      .catch(err => {
        console.log(err)
        setError(err)

      });
    // ! consol log payload 
    console.log(payload);
  }


  // DELETE USER 
  // e is the value you are passing through
  //! this breaks the site when i click add user (was in add user)
  // const deleteUser = (e) => {
  //   Axios.delete('http://localhost:5000/api/deleteUser')
  //     .then(res => {
  //       console.log("delete")
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setError(err)
  //     });
  // }

  //  PRODUCT managemanet --- --- --- !!!
  useEffect(() => {
    Axios.get('http://localhost:5000/api/product/')
      .then(res => {
        let productData = res.data;
        console.log(productData);

        let renderProducts = productData.map((item) => <ProductCard refreshProducts={refreshProducts} key={item._id} id={item._id} name={item.name} type={item.type} description={item.description} price={item.price} />)

        setProduct(renderProducts);
        setUpdateProducts(false);

      })
      .catch(err => console.log(err));
  }, [updateProducts])

  // // // //
  // product
  const getProductName = (e) => {
    let value = e.target.value;
    setProductName(value);
  }
  const getProductType = (e) => {
    let value = e.target.value;
    setProductType(value);
  }
  const getProductDescription = (e) => {
    let value = e.target.value;
    setProductDescription(value);
  }
  // maybe add wallet 
  const getProductPrice = (e) => {
    let value = e.target.value;
    setProductPrice(value);
  }

  // add product 
  const addProduct = (e) => {

    let payload = {
      name: ProductName,
      type: ProductType,
      description: ProductDescription,
      price: ProductPrice,
    }

    Axios.post('http://localhost:5000/api/addProduct/', payload)
      .then(res => {
        console.log(res.data)
        setUpdateProducts(true);

      })
      .catch(err => {
        console.log(err)
        setError(err)
      });
  }

  return (
    <div className='admin-main-con'>
      {/* title  */}
      <Tooltip title="Users">
        <div className='Product-title'>
          <h1>Users</h1>
        </div>
      </Tooltip>
      {/* /// USER SECTION /// */}
      <div className='user-container'>
        <div className='addUserForm'>
          <h1>Add User Form</h1>
          {/* {user} */}
          <Stack spacing={2}>
            {/* !!!!!!!!!!!!! */}
            {/* {user} */}
            {/* the get allows the text field to get inf and palce it into the table throught the get */}
            <TextField
              required
              id="userName"
              label="Name"
              onChange={getName}
              sx={{
                width: '400px'
              }}
            />
            <TextField
              required
              id="userSurname"
              label="Surname"
              sx={{
                width: '400px'
              }}
              onChange={getSurname}
            />
            <TextField
              required
              id="userUsername"
              label="Username"
              sx={{
                width: '400px'
              }}
              onChange={getUsername}
            />
            <TextField
              required
              id="userUsername"
              label="Email"
              sx={{
                width: '400px'
              }}
              onChange={getEmail}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              // defaultValue="Hello World"
              sx={{
                width: '400px'
              }}
              onChange={getPassword}
            />

            <Button onClick={addUser} variant="contained" sx={{ width: '400px' }}>Submit</Button>
            <p>{error}</p>
          </Stack>

        </div>

        <div className='userDisplay'>
          {/* cards  */}
          <div className='user-display'>
            <Grid item xs={6} >
              <h1>Users</h1>
              <Grid container spacing={2}>
                {/* brings the user info in form of card component (from the axios and useEffect) */}
                {user}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* user end  */}

      {/* /// PRODUCT SECTION ///*/}
      <div className='Product_managment-con'>
        {/* title  */}
        <Tooltip title="Products">
          <div className='Product-title'>
            <h1>Products</h1>
          </div>
        </Tooltip>
        {/* content  */}

        <div className='product-man-content-con'>

          {/* Add Product form  */}
          <div className='addProduct-form'>
            <h1>Add Product</h1>
            {/* text fields   */}
            <div className='appPro-field-con'>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {/* product name  */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Product Name"
                      sx={{ width: "90%", }}
                      onChange={getProductName}
                    />
                  </Grid>
                  {/* /// /// ///  */}
                  {/* product type  */}
                  <Grid item xs={12}>
                    {/* <InputLabel id="demo-simple-select-standard-label">type</InputLabel> */}
                    <FormControl sx={{ width: "90%" }}>
                      <InputLabel id="demo-simple-select-label">Type </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ProductType}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Shirts"}>Shirt</MenuItem>
                        <MenuItem value={"Pants"}>Pants</MenuItem>
                        <MenuItem value={"Hoody"}>Hoody</MenuItem>
                        <MenuItem value={"Shoes"}>Shoes</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* /// /// ///  */}
                  {/* product desc short (card) */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Description short"
                      sx={{ width: "90%", }}
                      onChange={getProductDescription}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Price"
                      sx={{ width: "90%", }}
                      onChange={getProductPrice}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={addProduct} variant='contained'>submit</Button>
                  </Grid>
                </Grid>
              </Box>




            </div>
          </div>
          {/* card  */}
          <div className='product-card-con'>
            <h1>Existing Products</h1>
            <div className='pro-admin-card-con'>
              {product}
            </div>
          </div>
        </div>
      </div>
      {/* product end  */}
    </div>
  )
}
export default Admin 