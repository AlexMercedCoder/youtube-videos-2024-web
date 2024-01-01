import Level1 from "./Level1";
import { createContext, useState } from "react";

export const OurContext = createContext(null);

function ContextLesson() {
  const cheese = "gouda";

  const [count, setCount] = useState(0)

  const addOne = () => setCount((oldCount) => oldCount + 1 )

  return (
    <div>
      <OurContext.Provider value={{bread: "wheat", count, addOne}}>
        <Level1 cheese={cheese}></Level1>
      </OurContext.Provider>
    </div>
  );
}

export default ContextLesson;
