import * as React from 'react';

interface CharacterProps {
  characterFlow: number[][] | 'displayAll'[] | string[];
  characters: string[];
  index: number;
  characterImages?: string[];
  imageDimension?: string[];
  containerClass?: string;
}

export const Character = (props: CharacterProps) => {
  const images =
    typeof props.characterFlow[props.index] == 'string'
      ? [...Array(props.characters.length).keys()].map((flow) => {
          return props.characterImages ? props.characterImages[flow] : null;
        })
      : (props.characterFlow[props.index] as number[]).map((flow) => {
          return props.characterImages ? props.characterImages[flow] : null;
        });

  return (
    <section
      id="characters"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        width: '80%',
      }}
      className={props.containerClass}
    >
      {images.map((imageURL, index) => {
        return imageURL == 'none' ? null : (
          <img key={index} src={imageURL as string} />
        );
      })}
    </section>
  );
};

export default Character;
