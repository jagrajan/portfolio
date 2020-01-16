import app from './app';
import MongoHelper from './helpers/mongo.helper';

const server = app.listen(app.get('port'), async () => {
  console.log(
    `  App is running at http://localhost:${app.get('port')} in
    ${app.get('env')} mode`,
  );
  console.log('  Press CTRL-C to stop\n');

  try {
    await MongoHelper.connect(`mongodb://127.0.0.1:27017/portfolio`);
    console.info(`Connected to Mongo!`);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
});

export default server;
