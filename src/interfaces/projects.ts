export default interface Project {
  title: string;
  desc: string;
  about: string;
  categories: string[];
  image?: string;
  techs: string[];
  released: boolean;
  website: string;
  github: string;
}
