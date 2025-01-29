import { KanbanContent } from '@/components/kanban/model'
import { IActionkanban } from './kanbanTypes'

export const initialState: KanbanContent = {
  columns: []
}

export const reducer = (state: KanbanContent, action: IActionkanban) => {
  switch (action.type) {
    case 'update-kanban':
      localStorage.setItem('mockData', JSON.stringify(action.payload))
      return action.payload
    case 'add-kanban': {
      const newData = {
        ...state,
        columns: state.columns.map(column =>
          column.name === 'TO DO'
            ? {
                ...column,
                content: [...column.content, action.payload]
              }
            : column
        )
      }
      localStorage.setItem('mockData', JSON.stringify(newData))
      return newData
    }
    default:
      return state
  }
}
