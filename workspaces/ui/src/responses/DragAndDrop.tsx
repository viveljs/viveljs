import * as React from 'react';
import { DndContext as DnDContext } from '@dnd-kit/core';
import { Droppable } from '../atoms/Droppable';
import { Draggable } from '../atoms/Draggable';

interface dragAndDropInterface {
  total: number;
  dropComponent: React.ReactNode;
  dragComponent: React.ReactNode;
}

export const DragAndDrop = (props: dragAndDropInterface) => {
  const array: number[] = React.useMemo(
    () => Array.from({ length: props.total }, (_value, i) => i),
    []
  );

  return (
    <DnDContext>
      {array.map((value) => {
        return (
          <div key={value}>
            <Droppable index={value}>{props.dropComponent}</Droppable>
            <Draggable index={value}>{props.dragComponent}</Draggable>
          </div>
        );
      })}
    </DnDContext>
  );
};
