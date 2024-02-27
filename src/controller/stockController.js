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
        var { nombre, codigo,unidad , impuesto, precio, cantidadMinima, categoria } = req.body;
        nombre = formatText(nombre);
        codigo = formatCode(codigo);
        cantidadMinima = formatQuantity(cantidadMinima); //
        precio = formatPrice(precio);
    
       if (!codeLenght(codigo)) {
        res.status(500).send("Code length must be 4 digits");
       }else{
        
        stock.create(nombre, codigo,unidad, impuesto, precio, cantidadMinima, categoria, (err, item) => {
        res.status(200).send(`Item added successfully. Id: ${item.id}`)
 
    });
}
    } catch (error) {
        res.status(500).send(error.message || 'Error creating item...')
    }
}

const updateItem = (req, res) => {
    try {
        var { nombre, codigo,unidad , impuesto, precio, cantidadMinima, categoria, id } = req.body;
        nombre = formatText(nombre);
        codigo = formatCode(codigo);
        cantidadMinima = formatQuantity(cantidadMinima); //
        precio = formatPrice(precio);
        
       if (categoria === 0) {
        res.status(400).send("Select a category");
        return
       }else if (!codeLenght(codigo)) {
        res.status(400).send("Code length must be 4 digits");
       }else{
        stock.update(nombre, codigo, unidad, impuesto, precio, cantidadMinima, categoria, id, (err, item) => {
            if (err) {
                res.status(500).send(err); // Si hay un error, envía el mensaje de error al cliente
            } else {
                res.status(200).send(`Item updated successfully. Id: ${id}`);
            }
        });
    }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const readByCode = (req, res) => {
    try {
        var codigo= req.params.codigo;
        stock.readByCode(codigo, (err, items)=>{
            if (err) {
                res.status(500).send(err.message || 'Error reading item');
                return;
            }
            res.status(200).json(items);
        });
    } catch (error) {
        res.status(500).send( error.message ||'Error reading item');
    }
}



export {readAllItems, createItem, readByCode, updateItem};