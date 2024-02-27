import transactions from "../models/transactions.js";
import { formatPrice } from '../utils/format.js';

const createTransaction = (req, res) => {
    try {
        var {producto_id, tipo, cantidad, fecha} = req.body
        cantidad = formatPrice(cantidad)
        transactions.createTransaction(producto_id, tipo, cantidad, fecha, (err, item)=>{
            res.status(200).send(`Transaction added successfully. Id: ${item.id}`)
        })
    } catch (error) {
        res.status(500).send(error.message || 'Error creating transactions...')
    }
}

const readAllTransactions = (req, res) => {
    try {
        transactions.readAllTransactions((err, items) => {
            res.status(200).json(items);
        } ) 
    } catch (error) {
        res.status(500).send(error.message || 'Error reading transactions...')
    }
    
}
export {createTransaction, readAllTransactions};