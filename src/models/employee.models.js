var conn =require('../../config/db.config');
var Employee = (employee)=>{
    this.first_name= employee.first_name ; 
    this.last_name = employee.last_name ; 
    this.email = employee.email ; 
    this.phone  = employee.phone ; 
    this.organization = employee.organization ; 
    this.designation = employee.designation ; 
    this.salary = employee.salary ; 
    this.status = employee.status ? employee.status:1 ; 
    this.created_at = new Date(); 
    this.upload_at = new Date(); 
}
// get all employess ; 
Employee.getAllEmployees = (result)=>{
    conn.query('Select * from employees ', (err , res)=>{
        if(err) {
            console.log("Error While Fetching Employees"); 
            result(null , err); 
        }else{
            console.log('Employees Fethed Successfully'); 
            result(null , res);
        }

    })
}
module.exports= Employee ; 