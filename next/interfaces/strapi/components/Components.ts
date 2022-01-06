import ComponentLargeMedia from './sections/LargeMedia';
import ComponentRichText from './sections/RichText';
import ComponentSlider from './sections/Slider';

export type Component =
  | ComponentRichText
  | ComponentSlider
  | ComponentLargeMedia;
