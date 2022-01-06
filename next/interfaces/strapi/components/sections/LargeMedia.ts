import { Components } from '../../../../enums/Components';
import Image from '../../Image';

export default interface ComponentLargeMedia {
  __component: Components.LargeMedia;
  id: number;
  media: Image;
}
