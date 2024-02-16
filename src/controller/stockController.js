import stock from '../models/stock.js';

const readAllItems = (req, res) => {
    try {
        stock.readAll((err, items) => {
            res.status(200).json(items);
        } ) 
    } catch (error) {
        res.status(500).send(error.message || 'Error reading items...')
    }
    
}

const createItem = (req, res) => {
    try {
        const { nombre, codigo, impuesto, precio, cantidad, categoria } = req.body;

        stock.create(nombre, codigo, impuesto, precio, cantidad, categoria, (err, item) => {
        res.status(200).send(`Item added successfully, id: ${item.id}`)
    });
    } catch (error) {
        res.status(500).send(error.message || 'Error creating item...')
    }
}

export {readAllItems, createItem};