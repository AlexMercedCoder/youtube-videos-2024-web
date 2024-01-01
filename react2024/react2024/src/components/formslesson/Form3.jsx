import { useState } from "react";

function Form3() {
  const empty = {
    name: "",
    age: 0,
  };

  const [formData, setFormData] = useState(empty);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name)
    console.log(formData.age)
  };

  const handleChange = (event) => {
    const input = event.target;
    // console.log("event.target:", input);
    const name = input.name;
    // console.log("name: ", name);
    const copyOfState = { ...formData };
    // console.log(copyOfState);
    copyOfState[name] = input.value;
    // console.log(copyOfState);
    setFormData(copyOfState);
    // setFormData({...formData, [event.target.name]: event.target.value})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form3;
