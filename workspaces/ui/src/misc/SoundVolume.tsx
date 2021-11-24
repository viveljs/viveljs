import * as React from 'react';
import Slider from 'rc-slider';

interface SoundVolumeProps {
  image: string;
  justIcon?: boolean;
  imageClassName?: string;
  containerClassName?: string;
}

export const SoundVolume = (props: SoundVolumeProps) => {
  if (props.justIcon)
    return <img src={props.image} className={props.imageClassName} />;
  return (
    <div className={props.containerClassName}>
      <img src={props.image} className={props.imageClassName} />
      <Slider />
      <Slider.Range />
    </div>
  );
};
