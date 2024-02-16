import { inicializeDb, db } from "./dbConfig.js";

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

   inicializeDb();

   export default { readAllCategories, createCategory}
    
  