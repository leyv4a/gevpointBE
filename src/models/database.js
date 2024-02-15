import sqlite3 from 'sqlite3';

const dbName = 'gevpoint.db';

let db = new sqlite3.Database(dbName, (err)=>{
   err
    ?
    console.log(err.message)
    : 
    console.log('Connected to database');
    db.run('CREATE TABLE IF NOT EXISTS almacen (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT, codigo TEXT, impuesto REAL, precio REAL, cantidad REAL)', (err) =>{
      err
        ?
       console.log(err.message)
       :
       console.log("Table 'almacen' created successfully")
    });


});

export default db;