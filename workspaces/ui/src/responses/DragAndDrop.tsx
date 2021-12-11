import * as React from 'react';
import { DndContext as DnDContext, useSensor, PointerSensor, closestCenter } from '@dnd-kit/core';
import { Droppable } from '../atoms/Droppable';
import { Draggable } from '../atoms/Draggable';


interface dragAndDropInterface {
  total: number;
  dropComponent: React.ReactNode;
  dragComponent: any;
  // setMarkUp: any
}

export const DragAndDrop = (props: dragAndDropInterface) => {
  const [parent, setParent] = React.useState<any>(null)
  const array: number[] = React.useMemo(
    () => Array.from({ length: props.total }, (_value, i) => i),
    []
  );
  const sensors = [useSensor(PointerSensor)]
  const handleDragEnd = (event:any) => {
    const {over} = event
    console.log(event, 'event')
    setParent(over ? +over.id[over.id.length-1] : null)   
  }
 
  // const draggableMarkUp = array.map((val) => {
  //   return <Draggable index={val}>{props.dragComponent}</Draggable>
  // })
  
  return (
    <DnDContext
    sensors={sensors}
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
      {array.map((value, i) => {
        return (
          <>
          {parent === null ? <Draggable key={value+100} index={value}>{props.dragComponent[i]}</Draggable> : null}
          <div key={value}>
            <Droppable index={value}>
              Drop here! 
              {parent === value ? <Draggable index={parent}>{props.dragComponent[i]}</Draggable> : props.dropComponent}
            </Droppable>
            
          </div>
        </>
        );
      })}
      
    </DnDContext>
  );
};
