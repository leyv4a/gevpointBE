import stock from '../models/stock.js';

const readAllItems = (req, res) => {
    stock.readAll((err, items) => {
        err 
        ? 
        res.status(500).send(err.message || 'Error reading items...')
        : 
        res.status(201).json(items);
    } )
}

const createItem = (req, res) => {
    const { nombre, codigo, impuesto, precio, cantidad, categoria } = req.body;
    stock.create(nombre, codigo, impuesto, precio, cantidad, categoria, (err, item) => {
        err ?
        res.status(500).send(err.message || 'Error creating item...')
        :
        res.status(200).send(`Item added successfully, id: ${item.id}`);
    });
    
}

export {readAllItems, createItem};