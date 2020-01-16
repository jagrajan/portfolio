import { NextFunction, Request, Response } from 'express';
import { Project } from '../schemas/project';

export const getIndex = async (req: Request, res: Response, next: NextFunction) => {
  const projects = await Project.find();
  console.log(projects);
  res.render('projects/index', { projects });

  /* Project.find().exec((err, snippets) => { */
  /*   console.log('here'); */
  /*   if (err) { */
  /*     console.error(err); */
  /*     next(err); */
  /*   } else { */
  /*     console.log(snippets); */
  /*     res.render('projects/index'); */
  /*   } */
  /* }); */
};
