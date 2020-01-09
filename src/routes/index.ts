import express from 'express';

// import routers
import portfolioRouter from './portfolio';
import blogRouter from './blog';
import cheatsheetRouter from './cheatsheet';
import aboutRouter from './about';

import { getIndex } from '../controllers/index';

const router: express.Router = express.Router();

router.use('/portfolio', portfolioRouter);
router.use('/blog', blogRouter);
router.use('/cheatsheet', cheatsheetRouter);
router.use('/about', aboutRouter);

router.get('/', getIndex);

export default router;
