// Write your code here
import './index.css'

const TodoItem = props => {
  const {searchItem, deleteItems} = props
  const onDelete = () => {
    deleteItems(searchItem.id)
  }

  return (
    <li>
      <p>{searchItem.title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
