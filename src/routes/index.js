import { Router } from 'express';
import { readAllItems, createItem, readByCode, updateItem, deleteItem, createSalida } from '../controller/stockController.js';
import { createCategory, deleteCategory, readAllCategories, readById, updateCategory } from '../controller/categoryController.js';
import { createTransaction, readAllEntradas, readAllSalidas, readAllTransactions } from '../controller/transactionsController.js';
import { createSale, getVentasDiarias, readAllSales } from '../controller/salesController.js';
import { createProfit, readAllIngresos, readAllEgresos } from '../controller/profitController.js'
import { RegistrarEntrada, gananciasBrutas, gastosTotalesMes, getMasVendido } from '../controller/posController.js';

const router = Router();

//POS router
router.post('/pos', RegistrarEntrada);
router.get('/brutas', gananciasBrutas);
router.get('/totales', gastosTotalesMes);
router.get('/top', getMasVendido);


//Productos router
router.get('/items', readAllItems);
router.get('/items/:codigo', readByCode);
router.post('/items', createItem);
router.put("/items", updateItem);
router.delete('/items/:id', deleteItem);
router.post('/items/sale', createSalida);

//Categorias router
router.post('/category', createCategory);
router.get('/category', readAllCategories);
router.get('/category/:id', readById);
router.put('/category', updateCategory);
router.delete('/category/:id', deleteCategory);

//Transacciones router
router.post('/transaction', createTransaction);
router.get('/transaction', readAllTransactions);
router.get('/transaction/entradas', readAllEntradas);
router.get('/transaction/salidas', readAllSalidas);

//Sales router
router.post('/sale', createSale);
router.get('/sale', readAllSales);
router.get('/sale/daily', getVentasDiarias);

//Profit router
router.post('/profit', createProfit);
router.get('/profit', readAllIngresos);
router.get('/losses', readAllEgresos);


export default router;