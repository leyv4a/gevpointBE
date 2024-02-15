import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('geverel.db');

const inicializeDb = ()=>{
    createAlmacenTable();
    createCategoriaTable();
};

const createAlmacenTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS almacen (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT, codigo TEXT, impuesto REAL, precio REAL, cantidad REAL, categoria_id INTEGER, FOREIGN KEY(categoria_id) REFERENCES categoria(id))', (err) =>{
      err
       ?
       console.log(err.message)
       :
       console.log("Table 'almacen' created successfully")
    });
}

const createCategoriaTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS categoria (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT)', (err) =>{
      err
     ?
       console.log(err.message)
       :
       console.log("Table 'categoria' created successfully")
    });
}

export {inicializeDb, createAlmacenTable, createCategoriaTable, db};