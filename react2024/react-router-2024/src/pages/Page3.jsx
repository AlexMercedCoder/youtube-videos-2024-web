import {Form} from "react-router-dom"

function Page3(){
    return <div>
        <h1>Page 3</h1>
        <Form action="/submitform" method="post">
            <input type="text" name="first_input"/>
            <input type="text" name="second_input"/>
            <button>Submit</button>
        </Form>
        <Form action="/page1" method="get">
            <input type="text" name="first_input"/>
            <input type="text" name="second_input"/>
            <button>Submit</button>
        </Form>
    </div>
}

export default Page3