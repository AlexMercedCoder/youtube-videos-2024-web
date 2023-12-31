function App() {
  return <div><Counter />
  <DisplayWithButton display="click to log" whenClicked={() => console.log("clicked")}/>
  </div>;
}

function Counter() {
  const [count, setCount] = React.useState(0);

  console.log(count);

  const addOne = () => {
    setCount((oldCount) => {
      return oldCount + 1;
    });
    console.table({ count });
  };

  return <DisplayWithButton display={count} whenClicked={addOne}/>;
}

function DisplayWithButton(props) {
  return (
    <div>
      <h1>{props.display}</h1>
      <button onClick={props.whenClicked}>click</button>
    </div>
  );
}
