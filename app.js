const express= require('express');
const bodyParser= require('body-parser');
const fs=require('fs');

const adminrouters= require('./Routes/admin');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminrouters);

app.listen(3000);