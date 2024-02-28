import { db } from "./dbConfig.js";

//CRETE TRANSACTION
const createTransaction = function (producto_id, tipo, cantidad, fecha, callback) {
    try {
        const query = "INSERT INTO transacciones (producto_id, tipo, cantidad, fecha) VALUES (?,?,?,?)";
        const values = [producto_id, tipo, cantidad, fecha];

        db.run(query, values, function (err) {
            if (err) {
                callback({ message: err.message }, null); // Llama al callback con un objeto de error
            } else {
                callback(null, { id: this.lastID });
            }
        });
    } catch (error) {
        callback({ message: error.message }, null);
    }
};

//READ ALL TRANSACTIONS
const readAllTransactions = (callback) => {
    try {
        const query = "SELECT t.id, p.nombre as nombre, t.tipo, t.cantidad, t.fecha FROM transacciones t JOIN productos p ON p.id = t.producto_id";
        db.all(query, [], function (err, rows) {
            if (err) {
                callback({ message: err.message }, null);
            } else {
                callback(null, rows);
            }
        });
    } catch (error) {
        callback({ message: error.message }, null);
    }
};



   export default { readAllTransactions, createTransaction};