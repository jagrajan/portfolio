import { Router, Request, Response } from 'express';
import { getIndex } from '../controllers/cheatsheet';

const router: Router = Router();

router.get('/', getIndex);

export default router;
