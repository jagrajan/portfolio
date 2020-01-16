import { Document, Schema, Model, model } from 'mongoose';
import { IProject } from '../interfaces/project';

export interface IProjectModel extends IProject, Document {

}

export var ProjectSchema: Schema = new Schema({
  name: String,
  language: [String],
  contentRaw: String,
  contentRendered: String,
  descriptionRaw: String,
  descriptionRendered: String,
  slug: String,
  imageUrl: String,
  githubUrl: String
});

export const Project: Model<IProjectModel> = model<IProjectModel>("Project", ProjectSchema);
