import express from 'express';

// import routers
import portfolioRouter from './portfolio';
import blogRouter from './blog';
import cheatsheetRouter from './cheatsheet';

import { getIndex } from '../controllers/index';

const router: express.Router = express.Router();

router.use('/portfolio', portfolioRouter);
router.use('/blog', blogRouter);
router.use('/cheatsheet', cheatsheetRouter);

router.get('/', getIndex);

export default router;
