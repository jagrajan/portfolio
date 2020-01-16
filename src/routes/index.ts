import express from 'express';

// import routers
import aboutRouter from './about';
import projectsRouter from './projects';
import projectRouter from './project';

import { getIndex } from '../controllers/index';

const router: express.Router = express.Router();

router.use('/about', aboutRouter);
router.use('/projects', projectsRouter);
router.use('/project', projectRouter);

router.get('/', getIndex);

export default router;
