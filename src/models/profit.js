import {db} from './dbConfig.js';

//CREATE PROFIT
const createProfit = function(tipo, monto, fecha, callback){
    try {
        const query = 'INSERT INTO ganancias(tipo, monto, fecha) VALUES (?, ?, ?)';
        const values= [tipo, monto, fecha];
        db.run(query, values, function(error){
        if (error) throw error;
        callback(null, {id: this.lastID});
    });
    } catch (error) {
        callback(error.message, null);
    }
}

//READ PROFIT
const readAllProfit = (callback) =>{
    const query = 'SELECT p.tipo, p.monto, p.fecha FROM ganancias p';
    db.all(query, [], callback);

}

export default {createProfit, readAllProfit};
