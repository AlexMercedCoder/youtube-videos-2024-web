# Getting Started with React

- [devNursery React Docs](https://docs.devnursery.com/reference/13-00-react/)

## Phase 1 - Single HTML Style

We'll get started intoducint the basic concepts in single HTML files. To add react to a basic html file:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
  integrity="sha512-MOCpqoRoisCTwJ8vQQiciZv0qcpROCidek3GTFS6KTk2+y7munJIlKCVkFCYY+p3ErYFXCjmFjnfTTRSC1OHWQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script
  type="text/javascript"
  src="https://unpkg.com/babel-standalone@6/babel.js"
></script>
```

Add a script tag with inline javascript or linking to an external file with the `type="text/babel"` property:

```html
<script type="text/babel" src="./components.js" defer></script>
<script type="text/babel" src="./app.js" defer></script>
```

Then your off to the races.

components.js (where you define your components)
```js
function App (){
    return <h1>Hello World</h1>
}
```

app.js (where we will mount your react app to the DOM)

```js
// Select node where components tree will render
const node = document.querySelector("#react")
// create component tree root
const root = ReactDOM.createRoot(node)
// render some JSX to the root
root.render(<App/>)
```

## Phase 2 - Vite Template

To spin up a new project using the Vite React template use:

```shell
npm create vite@latest
```

## Phase 3 - Remix & NextJS

Once you feel comfortable building apps with the Vite template, you can extend React to the backend with Remix & NextJS.
