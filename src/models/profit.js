import {db} from './dbConfig.js';

//CREATE PROFIT
const createProfit = function(tipo, descripcion, monto, fecha, callback){
    try {
        const query = 'INSERT INTO ganancias(tipo, descripcion,monto, fecha) VALUES (?, ?, ?, ?)';
        const values= [tipo,descripcion ,monto, fecha];
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
    const query = 'SELECT p.id, p.tipo,p.descripcion, p.monto, p.fecha FROM ganancias p';
    db.all(query, [], callback);

}

//READ INGRESOS
const readAllIngresos = (callback) =>{
    const query = 'SELECT p.id, p.tipo, p.monto,p.descripcion, p.fecha FROM ganancias p WHERE p.tipo = "Ingreso"';
    db.all(query, [], callback);

}
const readAllEgresos = (callback) =>{
    const query = 'SELECT p.id, p.tipo, p.monto,p.descripcion, p.fecha FROM ganancias p WHERE p.tipo = "Egreso"';
    db.all(query, [], callback);

}

const gastosTotalesMes =  (callback) => {
    const query = "SELECT substr(fecha, instr(fecha, '/')+1, 7) AS Mes, SUM(monto) AS GastosTotales FROM ganancias WHERE tipo = 'Egreso' GROUP BY substr(fecha, instr(fecha, '/')+1, 7)"
    db.all(query, [], callback);
}
const gastosMes =  (callback) => {
    const query = "SELECT Mes, GananciasBrutas, GastosTotales, (GananciasBrutas - GastosTotales) AS GananciasNetas FROM (SELECT substr(fecha, instr(fecha, '/')+1, 7) AS Mes, SUM(CASE WHEN tipo = 'Ingreso' THEN monto ELSE 0 END) AS GananciasBrutas,SUM(CASE WHEN tipo = 'Egreso' THEN monto ELSE 0 END) AS GastosTotales FROM ganancias GROUP BY Mes)"
    db.all(query, [], callback);
}


export default {createProfit, readAllProfit, readAllIngresos,readAllEgresos, gastosMes};
