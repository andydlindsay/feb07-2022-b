import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const todoMap = props.todos.map((todo) => {
    return <TodoListItem 
      key={todo.id} 
      {...todo} 
      // deleteTodo={props.deleteTodo} 
      onClick={() => props.deleteTodo(todo.id)}
    />;
  });

  return (
    <div>
      <h2>TodoList</h2>
      { todoMap }
    </div>
  );
};

export default TodoList;
