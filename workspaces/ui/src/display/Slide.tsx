import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { Pagination } from 'swiper';
import { FullScreenButton } from '../atoms/FullScreenButton';
import 'swiper/css';
import 'swiper/css/pagination';

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
  swiperSlideClass?: string;
  icons?: string[];
  slideClass?: string;
}

const inlineStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Slide = (props: ZoomProps) => {
  const slideHandle = useFullScreenHandle();

  return (
    <FullScreen
      className={slideHandle.active ? props.fullscreenClass : ''}
      handle={slideHandle}
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
              <SwiperSlide
                className={props.swiperSlideClass}
                key={`slide_${index}`}
              >
                <div
                  style={{
                    ...inlineStyle,
                    overflow: 'hidden',
                    maxHeight: slideHandle.active ? 'auto' : '40rem',
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
        {!slideHandle.active && (
          <div
            style={{
              ...inlineStyle,
              flexDirection: 'column',
              gap: '2rem',
              minWidth: '12rem',
            }}
          >
            {props.component}
            {props.enableFullScreen && (
              <FullScreenButton
                handle={slideHandle}
                imageClass={props.imageClass}
                buttonClass={props.buttonClass}
                icon={props.icons}
              />
            )}
          </div>
        )}
      </div>
      {slideHandle.active && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            bottom: '4rem',
            position: 'fixed',
            justifyContent: 'center',
          }}
        >
          <FullScreenButton
            handle={slideHandle}
            imageClass={props.imageClass}
            buttonClass={props.buttonClass}
            icon={props.icons}
          />
        </div>
      )}
    </FullScreen>
  );
};
