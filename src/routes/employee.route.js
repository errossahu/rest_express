const express = require('express');
const route = express.Router();

const EmployeController  = require('../controllers/employee.controller');



// get all employee ; 
route.get('/', EmployeController.getEmployeeList); 
// route get by id 
route.get('/:id', EmployeController.getEmployeeById);
// route post 
route.post('/', EmployeController.createNewEmploye);
// route put 
route.put('/:id', EmployeController.updateEmoloyee);
module.exports= route