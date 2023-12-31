function App() {
  return <div>
    <Counter />
    <Counter />
    <DisplayValueWithButton 
    value="click" 
    buttonEvent={() => alert("You clicked!")} 
    />
    </div>;
}

function Counter(prop) {
  const [count, setCount] = React.useState({ value: 0 });

  const addOne = () => {
    setCount((oldCount) => {
      return { value: oldCount.value + 1 };
    });
    console.log("count:", count);
  };

  return <DisplayValueWithButton 
  value={count.value} 
  buttonEvent={addOne}
  />;
}

function DisplayValueWithButton(props) {
  const value = props.value;
  const buttonEvent = props.buttonEvent;

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={buttonEvent}>Click</button>
    </div>
  );
}
