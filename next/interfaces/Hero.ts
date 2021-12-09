import Word from './strapi/components/nested/Word';
import Image from './strapi/Image';

export default interface Hero {
  id: number;
  words: Word[];
  published_at?: string;
  cover: Image;
}
