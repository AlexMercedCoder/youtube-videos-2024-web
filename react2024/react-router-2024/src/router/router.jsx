import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App"
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import { pokemonLoader } from "./loaders";
import { page3Action } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<h1>Main</h1>} />
            <Route path="/page1" element={<Page1/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
            <Route path="/page4/:param" element={<Page4/>} loader={pokemonLoader}/>
            <Route path="/submitform" action={page3Action}/>
        </Route>
    )
)


export default router