/*
* Conexión a MySQL
 */

import mysql from 'mysql';
import IndexController from "./indexController";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todo',
    password: 'todo',
    database: 'todos',
    port: 8889,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
export default connection;

