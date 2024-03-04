import { db } from "./dbConfig.js";

//CRETE CATEGORY
const createCategory = function (nombre ,callback) {
    try {
        const query = "INSERT INTO categoria (nombre) VALUES (?)"; 
        const values = [nombre];
        
        db.run(query, values, function(err){
           if (err) {
           callback(null, {id: this.lastID})
        return;
        }
            callback(null, {id: this.lastID});
        });
    } catch (error) {
        callback(error.message, null);
    }
}

//READ ALL CATEGORIES
const readAllCategories = function (callback) {
    try {
        const query = "SELECT id, nombre FROM categoria";
        db.all(query, [], callback);
    } catch (error) {
        callback(error.message, null);
    }
   }

   //READ BY ID CATEGORIES
const readById = function (id, callback) {
    try {
        const query = 'SELECT id, nombre FROM categoria WHERE id = ?';
        db.all(query, [id], (err, rows) => {
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

   const update = function (nombre, id, callback){
    try {
        const query = 'UPDATE categoria SET nombre =? WHERE id =?';
        const values = [nombre, id];
        db.run(query, values, function(err){
            if (err) {
            callback(err.message, null);
            }else{
            callback(null, {id: id, nombre: nombre})
        }
        });
    } catch (error) {
        callback(error, null);
    }
   }

   const deleteCategory= function(id, callback){
    try {
        const query = 'DELETE FROM categoria where id = ?';
        const values = [id];
        db.run(query,values , function(err){
            if (err) {
            callback(err.message, null);
            }else{
            callback(null, {id: id})
        }});
    } catch (error) {
        callback(error, null);
    }
   }


   export default { readAllCategories, createCategory, readById, update, deleteCategory}
    
  