import * as React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useAtom } from 'jotai';
import { globalStateAtom } from '@stores/game';

import style from '@styles/sceneProgress.module.css';
import contents from '@contentJSON';
import themes from '@themeJSON';

const SceneProgress = () => {
  const [state] = useAtom(globalStateAtom);

  const progress = (state.index / contents.scenes.length) * 100;

  const th: { [key: string]: any } = themes; // this is a hack seriously

  return (
    <div className={style.container}>
      <div className={style.label}>{progress.toFixed()} %</div>
      <ProgressBar
        isLabelVisible={false}
        completed={progress}
        barContainerClassName={style.containerBar}
        height="2.7rem"
        animateOnRender={true}
        bgColor={
          progress >= 100
            ? 'rgba(255,230,54,1)'
            : th[state.theme]['button-color']
        }
      />
    </div>
  );
};

export { SceneProgress };
