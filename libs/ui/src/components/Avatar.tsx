import * as React from 'react';

interface AvatarProps {
  characters?: string[];
  background?: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div id="avatarContainer">
      <div
        id="avatarSlot"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        {props.characters?.map((image, index) => {
          return <img src={image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Avatar;
