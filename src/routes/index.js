import { Router } from 'express';
import {readAllItems, createItem} from '../controller/stockController.js';
import {createCategory, readAllCategories} from '../controller/categoryController.js';
import { createTransaction, readAllTransactions } from '../controller/transactionsController.js';

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



export default router;