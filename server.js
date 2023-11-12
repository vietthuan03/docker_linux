import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from "cors";

import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.cjs";

// config env
dotenv.config();

// database config
// connectDB();

// rest object
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// routes
app.use("/api/v1/auth", authRoutes, bodyParser.json());
app.use("/api/v1/category", categoryRoutes, bodyParser.json());
app.use("/api/v1/product", productRoutes, bodyParser.json());


// middleware 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// rest api
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Ecommerce app</h1>');
})

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, ()=> {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});