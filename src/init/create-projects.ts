import MongoHelper from '../helpers/mongo.helper';
import { Project } from '../schemas/project';
import { resolve, join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { render } from 'pug';

const contentFile = 'content.pug';
const dataFile = 'data.json';
const descriptionFile = 'description.pug';

const initProjects = async () => {
  try {
    await MongoHelper.connect(`mongodb://127.0.0.1:27017/portfolio`);
    console.info(`Connected to Mongo!`);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }

  await Project.deleteMany({});

  const projectsDir = resolve(__dirname, '../../', 'src/init/projects');
  console.log(`Starting scan in : ${projectsDir}`);

  const folders = readdirSync(projectsDir).map(name => join(projectsDir, name));

  await Promise.all(
    folders.map(async f => {
      const data = JSON.parse(readFileSync(join(f, dataFile), 'utf8'));
      const contentRaw = readFileSync(join(f, contentFile), 'utf8');
      const contentRendered = render(contentRaw);
      const descriptionRaw = readFileSync(join(f, descriptionFile), 'utf8');
      const descriptionRendered = render(descriptionRaw);
      const res = await Project.create({
        ...data,
        contentRaw,
        contentRendered,
        descriptionRaw,
        descriptionRendered
      });
      console.log(`Created project: ${res.name}(${res._id})`);
    })
  );
}

initProjects().catch(err => console.error(err)).finally(() => {
  console.info('Database population complete!');
  process.exit();
});
