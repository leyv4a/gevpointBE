import { inicializeDb, db,  } from './dbConfig.js'


// CREATE ITEM
const create = function(nombre, codigo, impuesto, precio, cantidad, categoria, callback){
    try {
        const query = 'INSERT INTO almacen (nombre, codigo, impuesto, precio, cantidad, categoria_id) VALUES (?,?,?,?,?,?)';
    const values = [nombre, codigo, impuesto, precio, cantidad, categoria];

    db.run(query, values, function(err){
       if (err) throw err;
       callback(null, {id: this.lastID})
    });
    } catch (error) {
        callback(error.message, null);
    }
    
}

// READ ITEM
const readAll = (callback)=>{
    const query = 'SELECT almacen.nombre, almacen.codigo, almacen.impuesto,almacen.precio ,almacen.cantidad, categoria.nombre AS Categoria FROM almacen JOIN categoria ON almacen.categoria_id = categoria.id';
    db.all(query, [], callback);
}

inicializeDb();

export default {readAll, create};