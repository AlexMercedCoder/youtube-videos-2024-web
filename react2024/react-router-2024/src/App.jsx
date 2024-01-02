import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header><Link to="/"> MAIN </Link> | <Link to="page1">PAGE1</Link> | <Link to="/page2">PAGE2</Link> | <Link to="/page3">PAGE3</Link></header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
