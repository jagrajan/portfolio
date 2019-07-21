import { Router, Request, Response } from 'express';
import { getIndex } from '../controllers/blog';

const router: Router = Router();

router.get('/', getIndex);

export default router;
