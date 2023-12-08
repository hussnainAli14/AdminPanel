import React from 'react'
import { Header } from '../components'
import { KanbanComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'

const Kanban = () => {
  return (
    <div className='m-2 md:mt-10 mt-24 p-2 md:p-10 bg-white rounded-3xl' >
      <Header category={"Kanban"} title={"App"} />
      <KanbanComponent
      id='kanban'
      dataSource={kanbanData}
      cardSettings={{contentField:'Summary',headerField:'Id'}}
      keyField='Status'
      >
        <ColumnsDirective>
        {
          kanbanGrid.map((item,index)=>{
           return <ColumnDirective key={index} {...item} />
           
          })
        }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban
