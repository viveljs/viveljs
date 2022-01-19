import * as React from 'react';
import { AiFillSound } from 'react-icons/ai';
import useOutsideClick from '@hooks/useOutsideClick';

interface SettingsProps {
  children: React.ReactNode;
  className: string;
  buttonClass: string;
  iconClass: string;
  childrenContainerClass: string;
}

const Settings = (props: SettingsProps) => {
  const [visible, setVisibility] = React.useState(false);
  const clickOutside = React.useRef<any>(null);

  useOutsideClick(clickOutside, () => setVisibility(false));

  return (
    <div className={props.className} ref={clickOutside}>
      <div
        className={props.buttonClass}
        onClick={() => setVisibility(!visible)}
      >
        <AiFillSound size={25} className={props.iconClass} />
      </div>
      {visible && (
        <div className={props.childrenContainerClass}>{props.children}</div>
      )}
    </div>
  );
};

export { Settings };
