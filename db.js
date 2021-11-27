const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://falcon:gL6ihKGck22flNx2@cluster0.9prer.mongodb.net/opusfocus' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed') 
     }

}

module.exports = mongoose 