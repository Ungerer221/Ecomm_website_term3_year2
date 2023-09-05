//! check this page
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// routes
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cartproduct')

require('dotenv/config')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// still have set up routes | calling the routes
app.use(userRoute)
app.use(productRoute)
app.use(cartRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'testingform', //Collection Name | this will show up on your mogoose DB | the name pay attention to line underneath
}).then(() => console.log("Connected to testingform DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

//! maybe dont change to 5000 check this but its not the cause 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server Started on port:${PORT}`) });