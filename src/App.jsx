import { useState } from "react";
import Home from "./component/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <Home />
    </>
  );
}

export default App;