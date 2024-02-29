import { Router } from 'express';
import { readAllItems, createItem, readByCode, updateItem, deleteItem } from '../controller/stockController.js';
import { createCategory, deleteCategory, readAllCategories, readById, updateCategory } from '../controller/categoryController.js';
import { createTransaction, readAllEntradas, readAllSalidas, readAllTransactions } from '../controller/transactionsController.js';
import { createSale, readAllSales } from '../controller/salesController.js';
import { createProfit,readAllProfit, readAllIngresos, readAllEgresos } from '../controller/profitController.js'
import { RegistrarEntrada } from '../controller/posController.js';

const router = Router();

//POS router
router.post('/pos', RegistrarEntrada);

//Productos router
router.get('/items', readAllItems);
router.get('/items/:codigo', readByCode);
router.post('/items', createItem);
router.put("/items", updateItem);
router.delete('/items/:id', deleteItem);

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

//Profit router
router.post('/profit', createProfit);
router.get('/profit', readAllIngresos);
router.get('/losses', readAllEgresos);


export default router;