import { Router } from 'express';
import { getParamSlug } from '../controllers/project';

const router: Router = Router();

router.get('/:slug', getParamSlug);

export default router;
