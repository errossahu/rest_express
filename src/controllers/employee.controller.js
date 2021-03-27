// get Employe list;
// req = request 
// rest =response ; 
const M_employe = require('../models/employee.models');
exports.getEmployeeList= (req , res)=>{
    M_employe.getAllEmployees((err , employeess)=>{
        console.log('Here Are the employesss'); 
        if(err){
            res.send(err) ; 
        }
        else{
            res.send(employeess);
        }
    })

}
