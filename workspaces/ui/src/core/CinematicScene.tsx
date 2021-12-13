import * as React from 'react';
import ReactPlayer from 'react-player/file';

interface SubtitleProps {
  src: string;
  lang: string;
  label: string;
}

interface VideoProps {
  src: string;
  poster: string;
}

interface CinematicSceneProps {
  containerClassName?: string;
  video: VideoProps;
  subtitle?: SubtitleProps;
  onEnded?: () => void;
  volume?: number;
  onProgress?: (arg1: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => void;
}

export const CinematicScene = (props: CinematicSceneProps) => {
  return (
    <div className={props.containerClassName}>
      <ReactPlayer
        volume={props.volume}
        playing
        controls
        onEnded={props.onEnded}
        width="100vw"
        height="100vh"
        onProgress={(x) => props.onProgress && props.onProgress(x)}
        url={props.video.src}
        config={{
          attributes: {
            poster: props.video.poster,
          },
          tracks: props.subtitle
            ? [
                {
                  kind: 'subtitle',
                  src: props.subtitle.src,
                  srcLang: props.subtitle.lang,
                  label: props.subtitle.label,
                },
              ]
            : [],
        }}
      />
    </div>
  );
};
