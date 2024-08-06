import './index.css'
import TodoItem from '../TodoItem'
import {Component} from 'react'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {searchItem: initialTodosList}

  deleteItems = id => {
    const {searchItem} = this.state
    const initialItems = searchItem.filter(each => each.id !== id)
    this.setState({searchItem: initialItems})
  }
  render() {
    const {searchItem} = this.state
    return (
      <div className="dg-container">
        <h1>Simple Todos</h1>
        <ul>
          {searchItem.map(searchs => (
            <TodoItem
              key={searchs.id}
              deleteItems={this.deleteItems}
              searchItem={searchs}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SimpleTodos
