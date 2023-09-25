const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cors = require('cors'); 
const port = process.env.PORT || 3000;


const corsOptions = {
  origin: 'http://localhost:4200'
  };

const app = express();


app.use(express.json());
app.use(cors(corsOptions))
app.use("/api/users", router);
app.get('/', (req, res) => res.json('Equivalence API working'))


mongoose
    .connect(
        "mongodb+srv://admin:Barabolya987^@cluster0.i2iiqvu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>app.listen(port))
    .then(()=>
    console.log("Connected to Database and listening to ", port )
    )
    .catch((err)=> console.error(err));