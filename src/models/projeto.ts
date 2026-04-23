export default interface Projeto {
  id: number;
  name: string;
  desc: string;
  myRole: string;
  myContributions: string[];
  image: string;
  stacks: string[]
  linkProjects: string[];
  software: boolean;
  design: boolean;
}
