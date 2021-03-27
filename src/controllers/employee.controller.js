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
// Get By Id ; 
exports.getEmployeeById = (req, res)=>{
    M_employe.getEmployeeById(req.params.id, (err, employee)=>{
        if(err)
        {
            res.send(err)
        }
        else{
            res.send(employee);
        }
    })

};
// crete new employee ; 
exports.createNewEmploye= (req, res)=>{
    console.log('Cretate', req.body);
    const employeeReqData  =new M_employe(req.body);

    if(req.body.constructor ===Object && Object.keys(req.body).length=== 0){
        res.send(400).send({success:false , message:'please Fild All Field '}); 
    }
    else{
        M_employe.creteNewEmployee(employeeReqData, (err, employee)=>{
            if(err)
            {
                res.send(err);
                res.json({status:false , message:'Something Wrong'});
            }
            else{
                res.send({status:true , message:'Good', data:employee});
            }
        });
        console.log('Valid Data');
    }
}

