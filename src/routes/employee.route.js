const express = require('express');
const route = express.Router();

const EmployeController  = require('../controllers/employee.controller');


// get all employee ; 
route.get('/', EmployeController.getEmployeeList); 
module.exports= route