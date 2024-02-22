import { Router } from 'express';
import { readAllItems, createItem } from '../controller/stockController.js';
import { createCategory, readAllCategories } from '../controller/categoryController.js';
import { createTransaction, readAllTransactions } from '../controller/transactionsController.js';
import { createSale, readAllSales} from '../controller/salesController.js';
import { createProfit,readAllProfit } from '../controller/profitController.js'

const router = Router();

//Productos router
router.get('/items', readAllItems);
router.post('/items', createItem);

//Categorias router
router.post('/category', createCategory);
router.get('/category', readAllCategories);

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