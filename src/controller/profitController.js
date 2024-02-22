import profit from '../models/profit.js';

const createProfit = (req, res) => {
try {
    var {tipo, monto, fecha} = req.body;
    profit.createProfit(tipo, monto, fecha, (err, item) => {
        res.status(200).send(`Profit added successfully. Id: ${item.id}`);
    });
} catch (error) {
    res.status(500).send(error.message || 'Error creating profit...');
}
}

const readAllProfit = (req, res) => {
    try {
        profit.readAllProfit((err, items) => {
            res.status(200).json(items);
        });
    } catch (error) {
        res.status(500).send(error.message || 'Error reading profit...');
    }
}

export {createProfit, readAllProfit};