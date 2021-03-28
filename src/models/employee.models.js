var conn =require('../../config/db.config');
var Employee = function (employee){
    this.first_name= employee.first_name ; 
    this.last_name = employee.last_name ; 
    this.email = employee.email ; 
    this.phone  = employee.phone ; 
    this.organization = employee.organization ; 
    this.designation = employee.designation ; 
    this.salary = employee.salary ; 
    this.status = employee.status ? employee.status:1 ; 
    this.created_at = new Date(); 
    this.updated_at = new Date(); 
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
Employee.getEmployeeById = (id, result)=>{
    conn.query('Select * from employees  where id=?',id,(err,res)=>{
        if(err)
        {
            console.log('Errr While Fetching Data', err); 
            result(null, err); 
        }
        else{
            result(null, res); 
        }

    })
}

Employee.creteNewEmployee=(employeeData , result)=>{
    conn.query('INSERT INTO employees SET ?',employeeData,(err, res)=>{
        if(err){
            console.log('Error Whie Inserting Data');
            result(null,err);
        }
        else{
            console.log('Employee Addign Succesfully');
            result(null, res);
        }
    })
}


// updatte model query 

Employee.updateEmployee= (id, employeeData, result)=>{
     
    conn.query("UPDATE employees set first_name =? , last_name= ? , email=? , phone= ? , organization= ? , designation= ? , salary = ?,status=?  where id= ? ",
    [employeeData.first_name , employeeData.last_name , employeeData.email,employeeData.phone, employeeData.organization, employeeData.designation,employeeData.salary,employeeData.status , id ],(err, res)=>{
        if(err){

            console.log('Error WHILE RECORDING');
            result(null , err)
        }
        else{
            console.log('Succes Edit Data');
            result(null , res); 
        }
        
    });

}
Employee.deleteEmplyoee= (id,result)=>{
    conn.query('DELETE FROM employees where id= ?', id ,(err , res)=>{
        if(err)
        {
            console.log('Error while Deleting');
            result(null, err)
        }else{
            console.log('Success')
            result(null, res);
        }
    })
}

module.exports= Employee ; 