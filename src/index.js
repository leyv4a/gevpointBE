import express from 'express';
import stock from './models/stock.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/stock', (req, res) => {
    stock.read((err,rows)=>{
        err  ? res.status(500).send(err.message) : res.status(200).json(rows)
    })
});

app.post('/stock', (req,res)=>{
    const {nombre, codigo, impuesto, precio, cantidad} = req.body;
   stock.create(nombre, codigo, impuesto, precio, cantidad, (err, data)=>{
        err? res.status(500).send(err.message) : res.status(200).send(`item is added, id ${data.id}`);
    })
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Server is running on port '
      + PORT)
});

