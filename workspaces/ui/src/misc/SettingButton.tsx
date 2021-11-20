import * as React from 'react';
import { SettingBox } from '../atoms/SettingBox';

interface SettingButtonProps {
  iconOpened: string;
  iconClosed: string;
  settingList: React.ReactNode;
  settingClassName: string;
  className: string;
}

export const SettingButton = (props: SettingButtonProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div onClick={handleOpen} className={props.className}>
        <img src={isOpen ? props.iconOpened : props.iconClosed} />
      </div>
      <SettingBox className={props.settingClassName}>
        {props.settingList}
      </SettingBox>
    </>
  );
};
