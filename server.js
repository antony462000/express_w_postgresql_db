const express = require('express')

const app=express();
const port =3000;

app.listen(port,(error) =>{
    if(!error)
        console.log(`Server running at http://localhost:${port}/`)
    else
    console.log("Error occured, server can't start",error)
})