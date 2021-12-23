import * as React from 'react';
import useSound from '@viveljs/use-sound';

interface SliderProps {
  text: string;
  containerClassName?: string;
  headerClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
  inputClassName?: string;
  value: number;
  callback: (arg1: string) => void;
}

const Slider = (props: SliderProps) => {
  const [play] = useSound(pop, { volume: state.sfxVolume });

  const handleChange = (value: string) => {
    props.callback(value);
    play();
  };

  return (
    <div className={props.containerClassName}>
      <div className={props.headerClassName}>
        <div className={props.labelClassName}>{props.text}</div>
        <div className={props.valueClassName}>{props.value * 100} %</div>
      </div>
      <input
        type="range"
        className={props.inputClassName}
        min="0"
        max="10"
        value={props.value * 10}
        onChange={(event) => handleChange(event.target.value)}
        step="2"
      />
    </div>
  );
};

export { Slider };
