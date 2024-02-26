import { db,  } from './dbConfig.js'


// CREATE ITEM
const create = function(nombre, codigo, unidad ,impuesto, precio, cantidadMinima, categoria, callback){
    try {
        const query = 'INSERT INTO productos (nombre, codigo, unidad, impuesto, precio,cantidadMinima, categoria_id) VALUES (?,?,?,?,?,?,?)';
    const values = [nombre, codigo,unidad, impuesto, precio, cantidadMinima, categoria];

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
    const query = 'SELECT p.id, p.nombre, p.codigo ,p.impuesto,p.precio ,p.cantidadActual, p.cantidadMinima, c.nombre AS Categoria FROM productos p JOIN categoria c ON p.categoria_id = c.id';
    db.all(query, [], callback);
}

//READ ITEM BY CODIGO
const readByCode = function (codigo, callback) {
    try {
        const query = 'SELECT id, unidad FROM productos WHERE codigo = ?';
        db.all(query, [codigo], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    } catch (error) {
        callback(error.message, null);
    }
   }



export default {readAll, create, readByCode};