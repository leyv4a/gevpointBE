import db from './database.js'

// Create item
const create = function(nombre, codigo, impuesto, precio, cantidad, callback){
    const query = 'INSERT INTO almacen (nombre, codigo, impuesto, precio, cantidad) VALUES (?,?,?,?,?)';
    const values = [nombre, codigo, impuesto, precio, cantidad];

    db.run(query, values, function(err){
        callback(err, {id: this.lastID})
    });
};

const read = (callback)=>{
    const query = 'SELECT * FROM almacen';
    db.all(query, [], callback)
};

export default {read, create};