import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('geverel.db');

const inicializeDb = ()=>{
    createProductosTable();
    createCategoriaTable();
    createTransaccionesTable();
    createGananciasTable();
    createVentasTable();
};

const createProductosTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS productos (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT UNIQUE NOT NULL, codigo TEXT UNIQUE NOT NULL,unidad TEXT NOT NULL, impuesto REAL DEFAULT 0.0 , precio REAL, cantidadActual REAL DEFAULT 0,  cantidadMinima REAL, categoria_id INTEGER, FOREIGN KEY(categoria_id) REFERENCES categoria(id))', (err) =>{
      err
       ?
       console.log(err.message)
       :
       console.log("Table 'Productos' created or existed successfully")
    });
}

const createCategoriaTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS categoria (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre TEXT UNIQUE NOT NULL)', (err) =>{
      err
     ?
       console.log(err.message)
       :
       console.log("Table 'Categoria' created or existed successfully")
    });
}

const createTransaccionesTable = () => {
  db.run('CREATE TABLE IF NOT EXISTS transacciones (id INTEGER PRIMARY KEY AUTOINCREMENT, producto_id INTEGER, tipo TEXT,motivo TEXT ,cantidad REAL, fecha TEXT, FOREIGN KEY (producto_id) REFERENCES productos(id))', (err) =>{
    err
   ?
     console.log(err.message)
     :
     console.log("Table 'Transacciones' created or existed successfully")
  })
}

  const createGananciasTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS ganancias (id INTEGER PRIMARY KEY AUTOINCREMENT,tipo TEXT, descripcion TEXT,monto REAL, fecha TEXT)', (err) =>{
      err
     ?
       console.log(err.message)
       :
       console.log("Table 'Ganancias' created or existed successfully")
    })
  }

    const createVentasTable = () => {
      db.run('CREATE TABLE IF NOT EXISTS ventas (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha TEXT, monto REAL)', (err) =>{
        err
       ?
         console.log(err.message)
         :
         console.log("Table 'Ventas' created or existed successfully")
      })
    }

 


export {inicializeDb, db};