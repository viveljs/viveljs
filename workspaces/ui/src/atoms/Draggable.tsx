import * as React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableProps {
  index: number;
  className?: string;
  hoverColor?: string;
  hoverBGColor?: string;
  children: React.ReactNode;
}

export const Draggable = (props: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `dragggable-${props.index}`,
  });

  const style = {};

  return (
    <div
      style={transform ? style : undefined}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
};
