import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

interface ZoomProps {
  slides: React.ReactNode[];
  containerClass?: string;
  containerStart?: React.ReactNode;
  containerEnd?: React.ReactNode;
  wrapperStart?: React.ReactNode;
  wrapperEnd?: React.ReactNode;
  enableFullScreen?: boolean;
  component?: React.ReactNode;
  imageClass?: string;
  fullscreenClass?: string;
  buttonClass?: string;
  icons?: string[];
  slideClass?: string;
}

const inlineStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Slide = (props: ZoomProps) => {
  const handle = useFullScreenHandle();

  const FullScreenButton = () => {
    return (
      <button
        onClick={handle.active ? handle.exit : handle.enter}
        className={props.buttonClass}
      >
        {props.icons ? (
          <img
            style={{ maxWidth: '2rem' }}
            src={
              !handle.active ? props.icons[0] : props.icons[1] ?? props.icons[0]
            }
            className={props.imageClass}
          />
        ) : handle.active ? (
          'Exit'
        ) : (
          'Enter'
        )}
      </button>
    );
  };

  return (
    <FullScreen
      className={handle.active ? props.fullscreenClass : ''}
      handle={handle}
    >
      <div
        className={props.containerClass}
        style={{
          display: props.component ? 'flex' : 'block',
          justifyContent: props.component ? 'space-between' : '',
        }}
      >
        <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
          <div slot="container-start">{props.containerStart}</div>
          <div slot="wrapper-start">{props.wrapperStart}</div>
          {props.slides.map((slide, index) => {
            return (
              <SwiperSlide key={`slide_${index}`}>
                <div
                  style={{
                    ...inlineStyle,
                    overflow: 'hidden',
                    maxHeight: handle.active ? 'auto' : '40rem',
                  }}
                >
                  {slide}
                </div>
              </SwiperSlide>
            );
          })}
          <div slot="wrapper-end">{props.wrapperEnd}</div>
          <div slot="container-end">{props.containerEnd}</div>
        </Swiper>
        {!handle.active && (
          <div
            style={{
              ...inlineStyle,
              flexDirection: 'column',
              gap: '2rem',
              minWidth: '12rem',
            }}
          >
            {props.component}
            {props.enableFullScreen && <FullScreenButton />}
          </div>
        )}
      </div>
      {handle.active && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            bottom: '4rem',
            position: 'fixed',
            justifyContent: 'center',
          }}
        >
          <FullScreenButton />
        </div>
      )}
    </FullScreen>
  );
};
