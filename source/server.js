const express = require('express');
const connectDB = require('./config/db');
const port = 4000;


const app = express();

// connecting database
connectDB();

app.listen(port,()=>{`server running at http://localhost:${port}`})