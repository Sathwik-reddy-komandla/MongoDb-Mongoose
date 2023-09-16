const express=require("express");
const connectDb =require("./db/connection.js");
require('dotenv').config();

const app=express();
const port=process.env.PORT ||8000;
const DATABASE_URL=process.env.DATABASE_URL 
const {deleteById}=require('./models/Movies.js')

connectDb(DATABASE_URL)

// createDoc()
// createMany()
// allDocs()
// updateById('6505e21f908d8df90b7150a0')
// docByName('John Wick  2')
deleteById('6505e21f908d8df90b7150a0')
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});