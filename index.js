const express = require('express'); 


// created express app 
const app = express();

// setup the server port ; 
const port = process.env.port ||5000 

// define root 
app.get('/',(req, res)=>{
    res.send('Hello Word');
})
// impor router ; 
const employeRoutes= require('./src/routes/employee.route');
// cretate employe router ; 
app.use('/api/v1/employee',employeRoutes);

// listen port 
app.listen(port, ()=>{
    console.log(` Server Express Running at ${port}`);

})