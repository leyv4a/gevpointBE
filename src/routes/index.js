import { Router } from 'express';
import { readAllItems, createItem, readByCode } from '../controller/stockController.js';
import { createCategory, readAllCategories, readByName } from '../controller/categoryController.js';
import { createTransaction, readAllTransactions } from '../controller/transactionsController.js';
import { createSale, readAllSales } from '../controller/salesController.js';
import { createProfit,readAllProfit } from '../controller/profitController.js'

const router = Router();

//Productos router
router.get('/items', readAllItems);
router.get('/items/:codigo', readByCode);
router.post('/items', createItem);

//Categorias router
router.post('/category', createCategory);
router.get('/category', readAllCategories);
router.get('/category/:nombre', readByName);

//Transacciones router
router.post('/transaction', createTransaction);
router.get('/transaction', readAllTransactions);

//Sales router
router.post('/sale', createSale);
router.get('/sale', readAllSales);

//Profit router
router.post('/profit', createProfit);
router.get('/profit', readAllProfit);


export default router;