import { db } from "./dbConfig.js";

//CRETE CATEGORY
const createCategory = function (nombre ,callback) {
    try {
        const query = "INSERT INTO categoria (nombre) VALUES (?)"; 
        const values = [nombre];
        
        db.run(query, values, function(err){
           if (err) throw err;
           callback(null, {id: this.lastID})
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

   //READ BY NAME CATEGORIES
const readByName = function (nombre, callback) {
    try {
        const query = 'SELECT id, nombre FROM categoria WHERE nombre = ?';
        db.all(query, [nombre], (err, rows) => {
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


   export default { readAllCategories, createCategory, readByName}
    
  