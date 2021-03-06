import * as React from 'react';
import { multipleResult } from '../libs/multipleResults';
import { avatarCharacters } from '../libs/avatarFunctions';

interface CharacterNamesProps {
  characterFlow: number[][] | 'displayAll'[] | string[];
  characters: string[];
  and: string;
  index: number;
  textClass?: string;
}

export const CharacterNames = (props: CharacterNamesProps) => {
  if (props.index <= props.characterFlow.length - 1) {
    const characters = avatarCharacters(
      props.characterFlow,
      props.index,
      props.characters
    );

    return (
      <div id="characterNamesText" className={props.textClass}>
        {typeof props.characterFlow[props.index] == 'object' ||
        props.characterFlow[props.index] == 'displayAll'
          ? multipleResult(characters, props.and)
          : props.characterFlow[props.index]}
      </div>
    );
  }

  return <div className="error">Avatar Index Out of Bound</div>;
};
