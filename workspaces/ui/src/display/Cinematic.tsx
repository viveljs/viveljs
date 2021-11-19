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

export const Cinematic = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#101010',
      }}
    >
      <Player style={{ width: '80%' }}>
        <Video crossOrigin="" poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://media.vimejs.com/720p.mp4"
            type="video/mp4"
          />
          <track
            default
            kind="subtitles"
            src="https://media.vimejs.com/subs/english.vtt"
            srcLang="en"
            label="English"
          />
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
