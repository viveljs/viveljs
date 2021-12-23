import * as React from 'react';
import useOutsideClick from '../libs/useOutsideClick';

interface SettingsProps {
  children: React.ReactNode;
  className: string;
  buttonClass: string;
  icon: React.ReactNode;
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
        {props.icon}
      </div>
      {visible && (
        <div className={props.childrenContainerClass}>{props.children}</div>
      )}
    </div>
  );
};

export { Settings };
