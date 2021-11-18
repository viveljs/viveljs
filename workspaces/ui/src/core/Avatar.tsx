import * as React from 'react';
import { multipleResult } from '../libs/multipleResults';
import {
  avatarCharacters,
  avatarImageStyle,
  avatarImages,
  avatarSlotStyle,
} from '../libs/avatarFunctions';

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
    const avatarSlot = avatarSlotStyle(props.background, props.slotDimension);

    const avatarImage = avatarImageStyle(props.imageDimension);

    const characters = avatarCharacters(
      props.characterFlow,
      props.index,
      props.characters
    );

    const images = avatarImages(
      props.characterFlow,
      props.index,
      props.characters,
      props.characterImages
    );

    return (
      <div id="avatarContainer" className={props.containerClass}>
        <div id="avatarSlot" className={props.slotClass} style={avatarSlot}>
          {images.map((image: string | null, index: number) => {
            if (typeof image == 'string')
              return (
                <img
                  src={image}
                  style={{
                    ...avatarImage,
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
