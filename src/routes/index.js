import { Router } from 'express';
import {readAllItems, createItem} from '../controller/stockController.js';

const router = Router();

router.get('/items', readAllItems);

router.post('/items', createItem);


export default router;