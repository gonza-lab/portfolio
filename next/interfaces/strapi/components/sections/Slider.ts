import { Components } from '../../../../enums/Components';
import Image from '../../Image';

export default interface ComponentSlider {
  __component: Components.Slider;
  id: number;
  images: Image[];
}
