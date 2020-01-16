export interface IProject {
  name?: string;
  languages?: string[];
  contentRaw?: string;
  contentRendered?: string;
  descriptionRaw?: string;
  descriptionRendered?: string;
  slug?: string;
  githubUrl?: string;
  imageUrl?: string;
}
