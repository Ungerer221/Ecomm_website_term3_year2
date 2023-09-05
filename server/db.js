// ? connection to database 
//! check this page 
const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

module.exports = ()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database succesfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database")
    }
};