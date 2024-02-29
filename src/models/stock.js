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

const createEntrada = function(id, cantidad, callback){
    try {
        const query = 'UPDATE productos SET cantidadActual = cantidadActual + ? WHERE id =?';
        const values = [ cantidad,id];
        db.run(query, values, function(err){
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, { id: this.lastID });
        });
    }catch(err){
        callback({ message: err.message }, null);
    }
}
const createSalida = function(id, cantidad, callback){
    try {
        const query = 'UPDATE productos SET cantidadActual = cantidadActual - ? WHERE id =?';
        const values = [ cantidad,id];
        db.run(query, values, function(err){
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, { id: this.lastID });
        });
    }catch(err){
        callback({ message: err.message }, null);
    }
}

// READ ITEM
const readAll = (callback)=>{
    const query = 'SELECT p.id, p.nombre, p.codigo, p.unidad ,p.impuesto,p.precio ,p.cantidadActual, p.cantidadMinima, c.nombre AS Categoria FROM productos p JOIN categoria c ON p.categoria_id = c.id';
    db.all(query, [], callback);
}

//READ ITEM BY CODIGO
const readByCode = function (codigo, callback) {
    try {
        const query = 'SELECT id, nombre ,unidad FROM productos WHERE codigo = ?';
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

   const update = (nombre, codigo, unidad ,impuesto, precio, cantidadMinima, categoria, id,callback) => {
        try {
            const query = 'UPDATE productos SET nombre = ?, codigo=?, unidad=?, impuesto=? ,precio = ?, cantidadMinima = ?, categoria_id = ? WHERE id = ?';
            const values = [nombre, codigo,unidad, impuesto, precio, cantidadMinima, categoria,id];
            db.run(query,values, function(err){
                if (err) throw err;
                callback(null, {id: this.lastID})
            });
        } catch (error) {
                callback(error.message, null);
        }
   }

   const deleteItem = (id, callback) => {
        try {
            const query = 'DELETE FROM productos WHERE id = ?';
            const values = [id];
            db.run(query,values, function(err){
                if (err) {
                    callback(err.message, null);
                    }else{
                    callback(null, {id: id})
                }
            });
        } catch (error) {
            callback(error.message, null);
        }
   }


export default {readAll, create, readByCode, update, deleteItem, createEntrada, createSalida};