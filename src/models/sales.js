import {db } from './dbConfig.js';

//CREATE SALE
const createSale = function(fecha, monto, callback){
    try {
        const query = 'INSERT INTO ventas(fecha, monto) VALUES (?, ?)';
        const values= [fecha, monto];
        db.run(query, values, function(error){
        if (error) throw error;
        callback(null, {id: this.lastID});
    });
    } catch (error) {
        callback(error.message, null)
    }
}

//READ SALE
const readAllSales= (callback)=>{
    const query = 'SELECT v.id, v.fecha, v.monto FROM ventas v';
    db.all(query, [], callback);
}

export default {readAllSales, createSale};