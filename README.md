<h1 align='center'> E-comm Website Term3 Year2 :computer: </h1>
 E-comm site project for term 3 year 2

 <!-- image here -->
<picture align='center'>
    <img src='assets\coverImage.png'>
</picture>

<h2 align='center'> Project Brief </h2>
for this project we where required to develop a E-comm site that would use and store information in a database. The database that we would be using is MongoDB.

## Website Requirments 
- login, authentication & logout multiple users
- Authenticate, validate and secure user profile
- calculate the total price 
- Inventory management 
- Manage the income and processing of orders 
- Provide product variations such as size, colour, quantity, etc

### Home Page
- slider
- introduceing the website
- newest products
- Discounted Products

### Product Page 
- all available product 
- view product
- add to cart

### Individual product page
- price
- description 
- quantity 
- add to cart
- customize the product
    - size 
    - color
    - quantity

### Cart Page
- checkout form 
- checkout product list display 
- remove product from cart
- last minute changes 
- total price display

### login and sign up page and authentication 
- user authentification for login
- user account creation and store in database



<h2> Development process </h2>

<!-- ### wireframes -->

### Style Sheet
<picture align='center'>
    <img src='assets\Style Sheet.png'>
</picture>

## Built With
### HTML
html was used for setting up the structure of the website as well as the content which was set up in the `return()`
```
return(
    <div>
        main site structure
    </div>
);
```

### CSS
css what the main code used for styling the website

### JS / JSX
react js and jsx was used for creating the functionality of the website

<h3>Prerequisites</h3>
1. Node js
2. MongoDb account and a cluster
3. Insomnia: for Crud functionaility testing

## Utilities Used 
### MUI
MUI is a component libray where i made use of components such as buttons, inputs as well as card compenents for the admin page of my website. 

intallation of MUI

```
npm install @mui/material @emotion/react @emotion/styled
```
## Dependencies to INSTALL
a list of dependancies used in the development of this website

- react & react-router-dom **(main)**
```
npm i react react-router-dom
```
- axios **(main)**
```
npm i axios
```
- react-icons **(main)**
```
npm i react-icons
```
- MUI kit **(main)**
```
npm i @mui/material @emotion/react @emotion/styled
```
-  mongoose & mongodb **(server)**
<!-- used for connecting to the mongo database -->
```
npm i mongoose mongodb 
```
- express **(server)**
```
npm i express
```
- cors **(server)**
```
npm i cors
```
- dotenv **(server)**
```
npm i dotenv
```
- joi & joi-password-complexity **(server)**
```
npm i joi joi-password-complexity
```
- jsonwebtoken **(server)**
```
npm i jsonwebtoken 
```
- nodemon **(server)**
```
npm i nodemon
```
<h1>Features and Functionality</h1>

## Home Page 
the home page funcionality is that it must simple show the top 10 products for sale.
Calling data and then displaying each individual object
```
const [data, setData] = useState(null)
```
displaying the data
```
{data[0].name}
```

## Product page 
The product page functionality is that it must call and diplay all available products in the page. 
- The project page does this by calling info from the routes in the database using the `.get` function 
- the page sends this info to the **Product Card Component** and then display the objects in card from in the designated are using `{products}`
```
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
```
The data used is set up using `useState` as `const` variables.
```
// DATA
const [product, setProduct] = useState();
const [updateProducts, setUpdateProducts] = useState();


// PRODUCT
const [ProductName, setProductName] = useState();
const [ProductType, setProductType] = useState();
const [ProductDescription, setProductDescription] = useState();
const [ProductStock, setProductStock] = useState();
const [ProductPrice, setProductPrice] = useState();
```

## Cart page

### Methods to use for creating the cart functionality
- one is to have the it so that when to press add to cart it creats an object with the same data in the cart database which will show in the crt page 
- two is to have the products stored on local storage upon adding it to the cart

Method used:
when the add to cart button is clicked it will clone the object (using the post axios function) into the cart database where then the cart page reads the cart data and displays it into the cart page.

**Axios call**
```
useEffect(() => {
        Axios.get('http://localhost:5000/api/Cartproduct/')
            .then((response) => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
```

**Button**
```
<Button onClick={() => addCartProductToCart(console.log(props.name))} sx={{ fontSize: "24px" }}><BiCart /></Button>
```

## Admin (server)-side

### Mongo Connection

```
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: '`DBname`', //Collection Name | this will show up on your mogoose DB | the name pay attention to line underneath
}).then(() => console.log("Connected to DBname"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server Started on port:${PORT}`) });
```

### Server routes
Adding the product with a `.post`
```
// adding a product
router.post('/api/addProduct/', async (req, res) => {
    const product = new ProductSchema({ ...req.body })
    await product.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});
```
Fetching the product: `.get`
```
// to get product 
router.get('/api/product', async (req, res) => {
    const findProduct = await ProductSchema.find();
    res.json(findProduct)
});

//to get specific product
router.get('/api/product/:id' ,async (req,res)=>{
    // const { id } = req.params._id
    const findProduct = await ProductSchema.findById(req.params._id);
    res.json(findProduct)
})
```
Delete function: `.delete`
```
// DELETE
router.delete('/api/deleteProduct/:id', async (req, res) => {
    // const { id } = req.params._id
    await ProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})
```
Updating the user: `.put`
```
router.put('/api/user/:id', async (req, res) => {
    const { id } = req.params.id
    await UserSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})
```

## Components 
Conponents list
- Product Card
- User Card
- Carousel
- Login page
- Signup page
- Footer
- Navbar
- ToastNote

## images 
> [!NOTE]
> the images in the website aren't pulled from the data base 

## Note

> [!NOTE]
> The mehtod I tried using but turned unsuccessful for this project with the context Provider using for the cart functionality, credit goes to PedroTech (https://www.youtube.com/watch?v=tEMrD9t85v4&t=1021s) Note: that it is not functional

> [!WARNING]
> The Carousel isn't functional 

## Summary
### Highlights:
- Creating the E-comm site 
- Getting all the routing and axios calls right and actually displaying the Card components in the designated pages.
- Adding the Little touches like:
    - tool tips
    - dropdown functions
    - toast notifications