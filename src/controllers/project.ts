import { Request, Response } from 'express';
import { Project } from '../schemas/project';

export const getParamSlug = async (req: Request, res: Response) => {
  const { params } = req;
  const { slug } = params;
  const project = await Project.findOne({ slug });
  res.render('project/index', { project });
};
