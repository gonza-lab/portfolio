import Image from './strapi/Image';

export default interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  content: any[];
  coverImage: Image;
  hero: string;
}
