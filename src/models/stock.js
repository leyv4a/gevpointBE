import { db,  } from './dbConfig.js'


// CREATE ITEM
const create = function(nombre, codigo, impuesto, precio, cantidadActual, cantidadMinima, categoria, callback){
    try {
        const query = 'INSERT INTO productos (nombre, codigo, impuesto, precio, cantidadActual,cantidadMinima, categoria_id) VALUES (?,?,?,?,?,?,?)';
    const values = [nombre, codigo, impuesto, precio, cantidadActual, cantidadMinima, categoria];

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
    const query = 'SELECT p.id, p.nombre, p.codigo, p.impuesto,p.precio ,p.cantidadActual, p.cantidadMinima, c.nombre AS Categoria FROM productos p JOIN categoria c ON p.categoria_id = c.id';
    db.all(query, [], callback);
}



export default {readAll, create};