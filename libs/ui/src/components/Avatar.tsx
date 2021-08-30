import * as React from 'react';

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

const characterDisplay = (names: string[], and: string) => {
  const result = names.map((name, index) => {
    const separator = () => {
      if (index == names.length - 2) return ` ${and} `;
      if (index == names.length - 1) return '';
      return ', ';
    };

    return (
      <span key={index}>
        {name}
        {separator()}
      </span>
    );
  });

  return result;
};

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
              <img src={image as string} style={avatarImageStyle} key={index} />
            );
          })}
        </div>
        <div id="avatarText" className={props.textClass}>
          {typeof props.characterFlow[props.index] == 'object' ||
          props.characterFlow[props.index] == 'displayAll'
            ? characterDisplay(characters, props.and)
            : props.characterFlow[props.index]}
        </div>
      </div>
    );
  }

  return <div className="error">Avatar Index Out of Bound</div>;
};

export default Avatar;
