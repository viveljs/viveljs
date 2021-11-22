import * as React from 'react';
import {
  Player,
  DefaultUi as DefaultUI,
  Video,
  Spinner,
  Poster,
  Controls,
  ControlSpacer,
  TimeProgress,
  PlaybackControl,
  MuteControl,
  Scrim,
} from '@vime/react';
import '@vime/core/themes/default.css';

interface SubtitleProps {
  src: string;
  lang: string;
  label: string;
}

interface VideoProps {
  src: string;
  poster: string;
  type?: string;
}

interface CinematicProps {
  containerClassName?: string;
  containerBackground?: string;
  video: VideoProps;
  subtitle: SubtitleProps;
}

export const Cinematic = (props: CinematicProps) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: props.containerBackground ?? '#101010',
      }}
      className={props.containerClassName}
    >
      <Player style={{ width: '80%' }}>
        <Video poster={props.video.poster}>
          <source
            data-src={props.video.src}
            type={props.video.type ?? 'video/mp4'}
          />
          {props.subtitle && (
            <track
              default
              kind="subtitles"
              src={props.subtitle.src}
              srcLang={props.subtitle.lang}
              label={props.subtitle.label}
            />
          )}
        </Video>

        <DefaultUI noControls>
          <Scrim />
          <Spinner />
          <Poster />
          <Controls fullWidth pin="topLeft">
            <ControlSpacer />
            <MuteControl />
          </Controls>

          <Controls fullWidth pin="center">
            <ControlSpacer />
            <PlaybackControl />
            <ControlSpacer />
          </Controls>

          <Controls fullWidth pin="bottomLeft">
            <TimeProgress />
          </Controls>
        </DefaultUI>
      </Player>
    </div>
  );
};
