// Select node where components tree will render
const node = document.querySelector("#react")
// create component tree root
const root = ReactDOM.createRoot(node)
// render some JSX to the root
root.render(<App/>)