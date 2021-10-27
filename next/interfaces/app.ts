export default interface App {
  _id: string;
  app: string;
  name: string;
  information: [string, string][];
  url: string;
  photos: number;
  description: string[];
  isPersonal: boolean;
  repository?: string;
}
