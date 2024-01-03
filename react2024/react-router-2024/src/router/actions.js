import { redirect } from "react-router-dom";

export async function page3Action({request, params}){

    const formData = await request.formData()

    console.log(formData.get("first_input"))
    console.log(formData.get("second_input"))

    return redirect("/page2")

}