import { Router, Request, Response } from 'express';
import { getIndex } from '../controllers/projects';

const router: Router = Router();

router.get('/', getIndex);

export default router;
