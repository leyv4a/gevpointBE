import { db } from "./dbConfig.js";

//CRETE TRANSACTION
const createTransaction = function (producto_id, tipo,cantidad, fecha ,callback) {
    try {
        const query = "INSERT INTO transacciones (producto_id, tipo, cantidad, fecha) VALUES (?,?,?,?)"; 
        const values = [producto_id, tipo, cantidad, fecha];
        
        db.run(query, values, function(err){
           if (err) throw err;
           callback(null, {id: this.lastID})
        });
    } catch (error) {
        callback(error.message, null);
    }
}

//READ ALL TRANSACTIONS
const readAllTransactions =  (callback) => {
    try {
        const query = "SELECT t.id, p.nombre, t.tipo, t.cantidad, t.fecha FROM transacciones t JOIN productos p ON p.id = t.producto_id";
        db.all(query, [], callback);
    } catch (error) {
        callback(error.message, null);
    }
   }


   export default { readAllTransactions, createTransaction};