const mysql = require('mysql');

// my sql con  
const dbCon = mysql.createConnection({
   host:'localhost', 
   user:'root', 
   password:'', 
   database:'node_mysql_crud_db', 

});
dbCon.connect(function (error) {
    try {
        if(error) throw error;
        console.log('Database Connent Succesfully'); 
    } catch (error) {
        console.log(error)
    }


    
}); 
module.exports= dbCon ; 
