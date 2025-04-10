import mysql from 'mysql2/promise';
import bcrypt from "bcryptjs";
import bluebird from 'bluebird';


const salt = bcrypt.genSaltSync(10);


  

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);// Store hash in your password DB
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);
    
    connection.query(
        'INSERT INTO users (email,password,username) VALUES(?,?,?)', [email,hashPass,username],
        function(err, results, fields) {
           if(err){
            console.log(err);
           }
           console.log(results);
        }
      );
}

const getUserList = async() => {
    

    // Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  });

  let users = [];

//    connection.query(
//         'SELECT* from users ',
//         function(err, results, fields) {
//            if(err){
//             console.log(err);
//             return users;
//            }

//            users = results;
//            console.log(">>>Run get user list: ", users);
//            return users;
//         }
//       );

try {
    const [rows, fields] = await connection.execute('SELECT* from users ');
    return rows;
    
} catch (error) {
    console.log("Check error: ", error);
}
   
    

}

module.exports = {
    createNewUser,
    getUserList

};
