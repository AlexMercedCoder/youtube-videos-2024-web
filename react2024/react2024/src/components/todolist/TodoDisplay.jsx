function TodoDisplay(props) {
  if (props.todo.completed) {
    return <h1 style={{ color: "green" }}>{props.todo.text}</h1>;
  } else {
    return <h1 onClick={() => props.completed(props.index)} style={{ color: "red" }}>{props.todo.text}</h1>;
  }
}

export default TodoDisplay;
