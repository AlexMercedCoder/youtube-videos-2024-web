function App() {
  const cheese = "gouda";

  const propsToSend = { cheese: cheese, color: "blue" };

  const sendVariableToParent = (theThing) => {
    console.log(theThing)
  }

  return (
    <div>
      <Child {...propsToSend} />
      <Child cheese="munster" color="red" />
      <Child cheese="White Cheddar" color="green" />
      <DisplayChildren send={sendVariableToParent}>
        <h1>I am props.children</h1>
      </DisplayChildren>
      <DisplayChildren send={sendVariableToParent}>
        <h2>I am also a child</h2>
      </DisplayChildren>
    </div>
  );
}

function Child({color, cheese}) {
  return <h1 style={{ color: color }}>{cheese}</h1>;
}

function DisplayChildren(props){

    props.send(1)

    console.log(props.children)
    return <div></div>
}