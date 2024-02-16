import category from '../models/category.js';

const createCategory = (req, res) => {
    try {
        const {nombre} = req.body;
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