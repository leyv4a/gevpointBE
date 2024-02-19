import stock from '../models/stock.js';
import { formatText, formatCode, codeLenght, formatQuantity, formatPrice } from '../utils/format.js';

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
        var { nombre, codigo, impuesto, precio, cantidad, categoria } = req.body;
        nombre = formatText(nombre);
        codigo = formatCode(codigo);
        cantidad = formatQuantity(cantidad);
        precio = formatPrice(precio);
    
       if (!codeLenght(codigo)) {
        res.status(500).send("Code length must be 4 digits");
       }else{
        
        stock.create(nombre, codigo, impuesto, precio, cantidad, categoria, (err, item) => {
        res.status(200).send(`Item added successfully. Id: ${item.id}`)
 
    });
}
    } catch (error) {
        res.status(500).send(error.message || 'Error creating item...')
    }
}

export {readAllItems, createItem};