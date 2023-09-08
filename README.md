# <align="center"> E-comm Website Term3 Year2 :computer: 
 E-comm site project for term 3 year 2

 <!-- image here -->
<picture>
    <img src='assets\coverImage.png'>
</picture>

## Project Brief
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



## Development process
### wireframes
### Style Sheet
<picture>
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

## Utilities used 
### MUI
MUI is a component libray where i made use of components such as buttons, inputs as well as card compenents for the admin page of my website. 

intallation of MUI

```
npm install @mui/material @emotion/react @emotion/styled
```
## Dependencies 
a list of dependancies used in the development of this website

- react-router-dom
- axios
```
npm i axios
```
-  mongoose
```
npm i mongoose mongodb 
```
## Cart page

### Methods to use for creating the cart functionality
- one is to have the it so that when to press add to cart it creats an object with the same data in the cart database which will show in the crt page 
- two is to have the products stored on local storage upon adding it to the cart

when the add to cart button is clicked it will clone the object into the cart database where then the cart page reads the cart data and displays it into the cart
```
<Button onClick={() => addCartProductToCart(console.log(props.name))} sx={{ fontSize: "24px" }}><BiCart /></Button>
```

## components 

## images 
> [!NOTE]
> the images in the website aren't pulled from the data base 

## Note

> [!NOTE]
> The mehtod I tried with the context Provider using for the cart functionality, credit goes to PedroTech (https://www.youtube.com/watch?v=tEMrD9t85v4&t=1021s) Note: that it is not functional

> [!WARNING]
> The Carousel isn't functional 