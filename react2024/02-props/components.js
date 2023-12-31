const arr = [
  { name: "Alex", age: 38, color: "green" },
  { name: "Becky", age: 36, color: "purple" },
  { name: "Tony", age: 35, color: "yellow" },
  {name: "bob", age: 20, color: "red"}
];

function App(props) {
  console.log("The Props of the App Component", props);

  return (
    <Row>
      {arr.map((item) => {
        return <Card {...item} />;
      })}
    </Row>
  );
}

function Row(props) {
  return <div className="row">{props.children}</div>;
}

function Card({name, age, color}) {

  return (
    <div className="card" style={{color: color}}>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
