import * as React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

interface ProgressBarProps {
  progress: number;
  bgColor?: string;
  containerStyle?: string;
  labelStyle?: string;
  containerBarStyle?: string;
}

const SceneProgress = (props: ProgressBarProps) => {
  return (
    <div className={props.containerStyle}>
      <div className={props.labelStyle}>{props.progress.toFixed()} %</div>
      <ProgressBar
        isLabelVisible={false}
        completed={props.progress}
        barContainerClassName={props.containerBarStyle}
        height="2.7rem"
        animateOnRender={true}
        bgColor={props.bgColor}
      />
    </div>
  );
};

export { SceneProgress };
