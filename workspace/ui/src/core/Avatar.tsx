import * as React from 'react';
import { multipleResult } from '../libs/multipleResults';

interface AvatarProps {
  characterFlow: number[][] | 'displayAll'[] | string[];
  characters: string[];
  and: string;
  index: number;
  characterImages?: string[];
  background?: string;
  slotDimension?: string[];
  imageDimension?: string[];
  containerClass?: string;
  slotClass?: string;
  textClass?: string;
}

export const Avatar = (props: AvatarProps) => {
  if (props.index <= props.characterFlow.length - 1) {
    const avatarSlotStyle = {
      backgroundImage: `url(${props.background})`,
      display: 'flex',
      justifyContent: 'center',
      width: props.slotDimension ? props.slotDimension[0] : 'auto',
      height: props.slotDimension
        ? props.slotDimension[0] ?? props.slotDimension[1]
        : 'auto',
      overflow: 'hidden',
    };

    const avatarImageStyle = {
      width: props.imageDimension ? props.imageDimension[0] : 'auto',
      height: props.imageDimension
        ? props.imageDimension[0] ?? props.imageDimension[1]
        : 'auto',
    };

    const characters =
      typeof props.characterFlow[props.index] == 'string'
        ? [...Array(props.characters.length).keys()].map((flow) => {
            return props.characters[flow];
          })
        : (props.characterFlow[props.index] as number[]).map((flow) => {
            return props.characters[flow];
          });

    const images =
      typeof props.characterFlow[props.index] == 'string'
        ? [...Array(props.characters.length).keys()].map((flow) => {
            return props.characterImages ? props.characterImages[flow] : null;
          })
        : (props.characterFlow[props.index] as number[]).map((flow) => {
            return props.characterImages ? props.characterImages[flow] : null;
          });
    return (
      <div id="avatarContainer" className={props.containerClass}>
        <div
          id="avatarSlot"
          className={props.slotClass}
          style={avatarSlotStyle}
        >
          {images?.map((image, index) => {
            return (
              <img
                src={image as string}
                style={{
                  ...avatarImageStyle,
                  marginLeft: index > 0 ? '-1.2rem' : '0',
                }}
                key={index}
              />
            );
          })}
        </div>
        <div id="avatarText" className={props.textClass}>
          {typeof props.characterFlow[props.index] == 'object' ||
          props.characterFlow[props.index] == 'displayAll'
            ? multipleResult(characters, props.and)
            : props.characterFlow[props.index]}
        </div>
      </div>
    );
  }

  return <div className="error">Avatar Index Out of Bound</div>;
};

export default Avatar;
