import { DragAndDrop } from '../../../../workspaces/ui/src/responses/DragAndDrop'
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Components/Drag and Drop",
  component: DragAndDrop,
}as ComponentMeta<typeof DragAndDrop>;

export const DragAndDropFixture: ComponentStory<typeof DragAndDrop> = () => {
  // const [markUp, setMarkUp] = React.useState<any>(null)
  const [items, setItems] = React.useState<any>([
    {
      id: 1,
      name: 'Jhon'
    },
    {
      id: 2,
      name: 'Ned'
    },
    {
      id: 3,
      name: 'Aria'
    }
  ])
  const comp = items.map((item: any) => {
    return(
      <p
      key={item.id} 
      style={{
        // width:'200px', 
        // height:'200px',  
        marginBottom:'5px',
        marginTop:'5px', 
        border:'1px black solid', 
        textAlign:'center'}}>
          {item.name}
      </p>
    )
  })
  const a = <div style={{width:'200px', height:'200px', backgroundColor:'red'}}></div>
  
  return (
  <div style={{display:'flex', justifyContent:'space-between', alignItems:"center", flexDirection:'row'}}>
   
      <DragAndDrop  dropComponent={a} dragComponent={comp} total={items.length} />

  </div>  
  )
}