import sales from '../models/sales.js';

const createSale = (req, res) => {
    try {
        var { fecha, monto} = req.body;
        sales.createSale(fecha, monto, (err, item)=>{
            res.status(200).send(`Sale added successfully. Id: ${item.id}`)
        });
    } catch (error) {
        res.status(500).send(error.message || 'Error creating sale...') 
    }
}

const readAllSales = (req, res) => {
    try {
        sales.readAllSales((err, items) => {
            res.status(200).json(items);
        } )
    } catch (error) {
        res.status(500).send(error.message || 'Error reading sales...')
    }
}



export { createSale, readAllSales};