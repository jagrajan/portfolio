import express from 'express';
import path from 'path';
import pug from 'pug';

import router from './routes/index';

const app: express.Application = express();

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(router);
app.use(express.static('dist/public'));

export default app;
