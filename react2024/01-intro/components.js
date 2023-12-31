// function that returns HTML (JSX)
function App() {
  return (
    <Row>
      <Column>
        <h1>Hi</h1>
      </Column>
      <Column>
        <h1>Two</h1>
      </Column>
      <Column>
        <h1>three</h1>
      </Column>
      <OtherComponent/>
    </Row>
  );
}

function OtherComponent() {
    const cheese = "gouda"
  return (
    <div>
      <h1>{cheese}</h1>
    </div>
  );
}

function Column(props) {
  return <div className="column">{props.children}</div>;
}

function Row(props) {
  return <div className="row">{props.children}</div>;
}
