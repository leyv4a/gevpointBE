import {db} from './dbConfig.js';

//CREATE PROFIT
const createProfit = function(tipo, descripcion, monto, fecha, callback){
    try {
        const query = 'INSERT INTO ganancias(tipo, descripcion,monto, fecha) VALUES (?, ?, ?, ?)';
        const values= [tipo,descripcion ,monto, fecha];
        db.run(query, values, function(error){
            if(error){
                callback(error.message, null);
                return;
            }
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



const gastosMes =  (callback) => {
    // const query = "SELECT Mes, GananciasBrutas, GastosTotales, (GananciasBrutas - GastosTotales) AS GananciasNetas FROM ( SELECT strftime('%Y-%m', fecha) AS Mes, SUM(CASE WHEN tipo = 'Ingreso' THEN monto ELSE 0 END) AS GananciasBrutas, SUM(CASE WHEN tipo = 'Egreso' THEN monto ELSE 0 END) AS GastosTotales FROM ganancias WHERE strftime('%Y-%m', fecha) = strftime('%Y-%m', 'now') GROUP BY Mes);"
    const query = "SELECT Mes, GastosTotales, GananciasBrutas, (GananciasBrutas - GastosTotales) AS GananciasNetas, (GananciasNetas / GananciasBrutas * 100) AS Margen FROM (SELECT strftime('%Y-%m', fecha) AS Mes, SUM(CASE WHEN tipo = 'Ingreso' THEN monto ELSE 0 END) AS GananciasBrutas, SUM(CASE WHEN tipo = 'Egreso' THEN monto ELSE 0 END) AS GastosTotales, SUM(CASE WHEN tipo = 'Ingreso' THEN monto ELSE -monto END) AS GananciasNetas FROM ganancias WHERE strftime('%Y-%m', fecha) = strftime('%Y-%m', 'now')GROUP BY Mes);"
    db.all(query, [], callback);
}


export default {createProfit, readAllProfit, readAllIngresos,readAllEgresos, gastosMes};
