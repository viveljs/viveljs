import * as React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  index: number;
  className?: string;
  hoverColor?: string;
  hoverBGColor?: string;
  children: React.ReactNode;
}
export const Droppable = (props: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${props.index}`,
  });

  const style = {
    color: props.hoverColor,
    backgroundColor: props.hoverBGColor,
  };

  return (
    <div
      style={isOver ? style : undefined}
      className={props.className}
      ref={setNodeRef}
    >
      {props.children}
    </div>
  );
};
