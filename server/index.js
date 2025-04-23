require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const leadRoute = require("./routes/lead.route.js");
const limiter = require('./helper/rateLimiter.js')


const PORT = process.env.PORT || 4000
const DB_CONNECT = process.env.DB_CONNECT_STRING

const app = express();

// middleware
app.use(cors({ origin: '*', }));
app.use(express.json({limit: '20MB'}));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/leads",limiter,  leadRoute);


mongoose
    .connect(DB_CONNECT).then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    })
    .catch((e) => {
        console.log("Connection failed!", e);
    });