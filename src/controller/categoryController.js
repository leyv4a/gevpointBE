import category from '../models/category.js';
import { formatText } from '../utils/format.js';

const createCategory = (req, res) => {
    try {
        var {nombre} = req.body;
        nombre = formatText(nombre);
        category.createCategory(nombre, (err, item) => {
            res.status(200).send(`Category added successfully. Id: ${item.id}`);
        });
    } catch (error) {
        res.status(500).send( error.message ||'Error creating category');
    }
}

const readAllCategories = (req, res) => {
    try {
        category.readAllCategories((err, items)=>{
            res.status(200).json(items);
        });
    } catch (error) {
        res.status(500).send( error.message ||'Error reading categories');
    }
}

export {createCategory, readAllCategories};