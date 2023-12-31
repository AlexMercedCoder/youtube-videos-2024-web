// grab the node I want to inject react in
const node = document.querySelector("#react")
// create the root of our component tree
const root = ReactDOM.createRoot(node)
// render our component tree at the root
root.render(<App/>)