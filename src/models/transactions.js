import { db } from "./dbConfig.js";

//CRETE TRANSACTION
const createTransaction = function (producto_id, tipo, motivo, cantidad, fecha, callback) {
    try {
        const query = "INSERT INTO transacciones (producto_id, tipo, motivo,cantidad, fecha) VALUES (?,?,?,?,?)";
        const values = [producto_id, tipo, motivo, cantidad, fecha];

        db.run(query, values, function (err) {
            if (err) {
                callback({ message: err.message }, null);
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
        const query = "SELECT t.id, p.nombre as nombre,p.codigo as codigo, t.tipo,t.motivo, t.cantidad, t.fecha FROM transacciones t JOIN productos p ON p.id = t.producto_id";
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

const readEntradas= (callback) => {
    try {
        const query = "SELECT t.id, p.nombre as nombre,p.codigo as codigo, t.tipo,t.motivo, t.cantidad, t.fecha FROM transacciones t JOIN productos p ON p.id = t.producto_id WHERE t.tipo = 'Entrada'";
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
const readSalidas= (callback) => {
    try {
        const query = "SELECT t.id, p.nombre as nombre,p.codigo as codigo, t.tipo,t.motivo, t.cantidad, t.fecha FROM transacciones t JOIN productos p ON p.id = t.producto_id WHERE t.tipo = 'Salida'";
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


   export default { readAllTransactions, createTransaction,readEntradas, readSalidas};