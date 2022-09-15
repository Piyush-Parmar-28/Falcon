const express = require('express');
const path = require('path');
require('./db/mongo')

const User = require('../models/user')

const publicDir = path.join(__dirname, "../public");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(publicDir));




app.listen(port,()=>{
    console.log('listning to port: ' + port);
})





