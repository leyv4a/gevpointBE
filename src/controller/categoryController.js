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
const readById = (req, res) => {
    try {
        var id = req.params.id;
        category.readById(id, (err, items)=>{
            if (err) {
                res.status(500).send(err.message || 'Error reading categories');
                return;
            }
            res.status(200).json(items);
        });
    } catch (error) {
        res.status(500).send( error.message ||'Error reading categories');
    }
}

const updateCategory = (req, res )=> {
    try {
        var {nombre, id} = req.body;
        nombre = formatText(nombre);
        category.update(nombre, id, (err, item) => {
          err ? res.status(500).send(err.message || 'Error updating') :
          res.status(200).send(`Category updated successfully. :  ${item.id}`);
        });
    } catch (error) {
        res.status(500).send( error.message ||'Error updating category');
    }
} 

const deleteCategory = (req, res) => {
    try {
       var id = req.params.id;
       if (id == 0) {
        res.status(400).send('No se puede eliminar la categoria por defecto');
        return;
       }
        category.deleteCategory(id, (err, deletedItem)=>{
            err? res.status(500).send(err.message || 'Error deleting') :
            res.status(200).send(`Category deleted successfully. :  ${deletedItem.id}`);
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export {createCategory, readAllCategories, readById, updateCategory, deleteCategory};