import sales from '../models/sales.js';
import profit from '../models/profit.js';
import transactions from "../models/transactions.js";
import stock from "../models/stock.js";
import { formatPrice } from '../utils/format.js';

//CREAR TRANSACCION PARA CUANDO SE GENERE UNA VENTA

const RegistrarEntrada = function(req, res){
    try {
        var {producto_id, tipo,motivo, cantidad, fecha} = req.body;
        cantidad = formatPrice(cantidad);
       if ( producto_id == 0 || producto_id == undefined || producto_id == null) {
        res.status(400).send('El id es invalido o no existe');
        return;
    }
    transactions.createTransaction(producto_id, tipo,motivo, cantidad, fecha, (err, trans) => {
        if (err) {
            res.status(400).send({ error: err.message }); // Envía el objeto de error al cliente
            return;
        } else {
            stock.createEntrada(producto_id,cantidad, (err, item) => {
                if (err) {
                    res.status(400).send({ error: err.message }); // Envía el objeto de error al cliente
                    return;
                } else {
                    res.status(200).send(`Transaction maded successfully.`);
                }
            });
        }
    });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const RegistrarSalida = function(req, res){
    try {
        var {producto_id, tipo,motivo, cantidad, fecha} = req.body;
        cantidad = formatPrice(cantidad);
       if ( producto_id == 0 || producto_id == undefined || producto_id == null) {
        res.status(400).send('El id es invalido o no existe');
        return;
    }
    transactions.createTransaction(producto_id, tipo,motivo, cantidad, fecha, (err, trans) => {
        if (err) {
            res.status(400).send({ error: err.message }); // Envía el objeto de error al cliente
            return;
        } else {
            stock.createEntrada(producto_id,cantidad, (err, item) => {
                if (err) {
                    res.status(400).send({ error: err.message }); // Envía el objeto de error al cliente
                    return;
                } else {
                    res.status(200).send(`Transaction maded successfully.`);
                }
            });
        }
    });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


const gananciasBrutas = (req, res) => {
    try {
        sales.gananciasBrutas((err, items) => {
            res.status(200).json(items);
        } )
    } catch (error) {
        res.status(500).send(error.message || 'Error reading sales...')
    }
}

const gastosTotalesMes = (req, res) =>{
    try {
        profit.gastosMes((err, item) => {
           if (err) {
            res.status(500).send(err.message || 'Error');
            return;
           }
           res.status(200).json(item);
        });
    } catch (error) {
        res.status(500).send(error.message || 'Error reading sales...')
    }
}

const getMasVendido= (req, res)=>{
    try {
        transactions.getMasVendido((err, item)=>{
            if (err) {
                res.status(500).send(err.message || 'Error');
                return;
               }
               res.status(200).json(item);
        });
    } catch (error) {
        res.status(500).send(err.message || 'Error');
    }
}

export {RegistrarEntrada, RegistrarSalida, gananciasBrutas, gastosTotalesMes, getMasVendido};