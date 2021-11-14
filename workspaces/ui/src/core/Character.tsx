import * as React from 'react';

interface CharacterProps {
  characterFlow: number[][] | 'displayAll'[] | string[];
  characters: string[];
  index: number;
  characterImages?: string[];
  imageDimension?: string[];
  containerClass?: string;
  imageClass?: string;
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
        position: 'fixed',
        bottom: '2rem',
        zIndex: 0,
        justifyContent: 'around',
        alignItems: 'end',
        width: '50%',
      }}
      className={props.containerClass}
    >
      {images.map((imageURL, index) => {
        return imageURL == 'none' ? null : (
          <div key={index} style={{ maxWidth: '10rem' }}>
            <img
              src={imageURL as string}
              className={props.imageClass}
              style={{ height: 'auto', maxWidth: '20rem' }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Character;
