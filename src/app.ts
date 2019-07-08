import express from 'express';
import path from 'path';
import pug from 'pug';

const app: express.Application = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use((req: express.Request, res: express.Response) => {
  res.render('base/layout');
});

export default app;
