const avatarSlotStyle = (
  background: string | undefined,
  slotDimension: string[] | undefined
) => {
  return {
    backgroundImage: `url(${background})`,
    display: 'flex',
    justifyContent: 'center',
    width: slotDimension ? slotDimension[0] : 'auto',
    height: slotDimension ? slotDimension[0] ?? slotDimension[1] : 'auto',
    overflow: 'hidden',
  };
};

const avatarImageStyle = (imageDimension: string[] | undefined) => {
  return {
    width: imageDimension ? imageDimension[0] : 'auto',
    height: imageDimension ? imageDimension[0] ?? imageDimension[1] : 'auto',
  };
};

const avatarCharacters = (
  characterFlow: string[] | number[][] | 'displayAll'[],
  index: number,
  characters: string[]
) => {
  if (typeof characterFlow[index] == 'string')
    return [...Array(characters.length).keys()].map((flow) => {
      return characters[flow];
    });
  return (characterFlow[index] as number[]).map((flow) => {
    return characters[flow];
  });
};

const avatarImages = (
  characterFlow: string[] | number[][] | 'displayAll'[],
  index: number,
  characters: string[],
  characterImages: string[] | undefined
) => {
  if (typeof characterFlow[index] == 'string')
    return [...Array(characters.length).keys()].map((flow) => {
      return characterImages ? characterImages[flow] : null;
    });
  return (characterFlow[index] as number[]).map((flow) => {
    return characterImages ? characterImages[flow] : null;
  });
};

export { avatarImages, avatarCharacters, avatarImageStyle, avatarSlotStyle };
