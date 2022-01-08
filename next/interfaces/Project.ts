import { Component } from './strapi/components/Components';
import Image from './strapi/Image';

export default interface Project {
  id: number;
  url?: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  content: Component[];
  coverImage: Image;
  hero: string;
}
