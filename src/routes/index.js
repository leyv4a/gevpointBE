import { Router } from 'express';
import {readAllItems, createItem} from '../controller/stockController.js';
import {createCategory, readAllCategories} from '../controller/categoryController.js';

const router = Router();

router.get('/items', readAllItems);

router.post('/items', createItem);

router.post('/category', createCategory);

router.get('/category', readAllCategories);


export default router;