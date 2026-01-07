require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { log } = require('console');
const connectDB = require('./config/db');


const app = express();
console.log('hello');


//middleware to handle cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET","PUT","POST", "DELETE"],
        allowedHeaders:["Content-type","Authorization"],
    })
)

//connect database
connectDB()
//middleware
app.use(express.json());


//Routes

// app.use('/app/auth', authRoutes);
// app.use('/app/users', userRoutes);
// app.use('/app/tasks', taskRoutes);
// app.use('/app/reports', reportRoutes);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> log(`Server is running on port ${PORT}`))