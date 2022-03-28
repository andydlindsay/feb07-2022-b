import './TodoListItem.scss';

const TodoListItem = ({todo, id, onClick}) => {
  // const {todo, id} = props.todo;

  return (
    <div className="todo">
      {/* <h2>Todo: {props.todo.todo} ({props.todo.id})</h2> */}
      <h3>Todo: {todo} ({id})</h3>
      <button onClick={onClick}>Delete</button>
      <h2>More stuff!!</h2>
      {/* <button onClick={event => deleteTodo(event)}>Delete</button> */}
    </div>
  );
};

export default TodoListItem;
