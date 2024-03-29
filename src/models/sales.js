import {db } from './dbConfig.js';

//CREATE SALE
const createSale = function(fecha, monto, callback){
    try {
        const query = 'INSERT INTO ventas(fecha, monto) VALUES (?, ?)';
        const values= [fecha, monto];
        db.run(query, values, function(error){
            if (error) {
                callback(error.message, null);
                return;
            }
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

const gananciasBrutas = (callback)=>{
    const query = "SELECT strftime('%Y-%m', fecha) AS Mes, SUM(monto) AS brutas FROM ventas GROUP BY Mes"
    db.all(query, [], callback);

}

const getVentasDiarias = (callback) => {
    const query = "SELECT strftime('%d', fecha) AS dia, COUNT(*) AS ventas FROM ventas WHERE strftime('%Y-%m', fecha) = strftime('%Y-%m', 'now') GROUP BY dia;"
    
    db.all(query, [], callback);
  };

  const getVentaSemanaMes = (callback) => {
    //Esta consulta devuelve el dineor generado ese dia
    // const query = "SELECT strftime('%w', fecha) as dia_semana, strftime('%Y-%m', fecha) as mes_anio, SUM(monto) as total_ventas FROM ventas WHERE strftime('%Y-%m', fecha) = strftime('%Y-%m', 'now') GROUP BY dia_semana ORDER BY dia_semana;" 
    const query = "SELECT strftime('%w', fecha) as dia_semana, COUNT(*) as total_ventas FROM ventas WHERE strftime('%Y-%m', fecha) = strftime('%Y-%m', 'now') GROUP BY dia_semana ORDER BY dia_semana;"
    db.all(query, [], callback);
  }

export default {readAllSales, createSale, gananciasBrutas, getVentasDiarias, getVentaSemanaMes};