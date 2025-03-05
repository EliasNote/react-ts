const Task = ({ task }) => {
  return (
    <li>
      <span>{task}</span>
      <button>Remover</button>
    </li>
  )
}

export default Task