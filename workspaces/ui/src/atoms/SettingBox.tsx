import * as React from 'react';

export interface SettingBoxProps {
  className: string;
  children: React.ReactNode;
}

export const SettingBox = (props: SettingBoxProps) => {
  return <div className={props.className}>{props.children}</div>;
};
