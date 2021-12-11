import * as React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'

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

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    border: '2px solid red'
  }: undefined;
  // console.log(props.index, 'dada')
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
};
