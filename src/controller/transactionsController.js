import transactions from "../models/transactions.js";
import { formatPrice } from '../utils/format.js';

const createTransaction = (req, res) => {
    try {
        var { producto_id, tipo,motivo ,cantidad, fecha } = req.body;
        cantidad = formatPrice(cantidad);
        transactions.createTransaction(producto_id, tipo, motivo ,cantidad, fecha, (err, item) => {
            if (err) {
                res.status(500).send({ error: err.message }); // Envía el objeto de error al cliente
            } else {
                res.status(200).send(`Item added successfully. Id: ${item.id}`);
            }
        });
    } catch (error) {
        res.status(500).send({ error: error.message || 'Error creating transactions...' });
    }
};

const readAllTransactions = (req, res) => {
    try {
        transactions.readAllTransactions((err, items) => {
            if (err) {
                console.error('Error reading transactions:', err.message);
                res.status(500).send({ error: err.message });
                return;
            } else {
                res.status(200).json(items);
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error.message);
        res.status(500).send({ error: error.message || 'Error reading transactions...' });
    }
};
const readAllEntradas = (req, res) => {
    try {
        transactions.readEntradas((err, items) => {
            if (err) {
                console.error('Error reading transactions:', err.message);
                res.status(500).send({ error: err.message });
                return;
            } else {
                res.status(200).json(items);
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error.message);
        res.status(500).send({ error: error.message || 'Error reading transactions...' });
    }
};
const readAllSalidas = (req, res) => {
    try {
        transactions.readSalidas((err, items) => {
            if (err) {
                console.error('Error reading transactions:', err.message);
                res.status(500).send({ error: err.message });
                return;
            } else {
                res.status(200).json(items);
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error.message);
        res.status(500).send({ error: error.message || 'Error reading transactions...' });
    }
};
export {createTransaction, readAllTransactions, readAllEntradas, readAllSalidas};