import { useState } from "react";
import Button from "./components/Button/Button";

function App() {
  const [msg, setMsg] = useState("Let's learn more about testing in React");

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{msg}</p>
      <Button disable={true} onClick={() => setMsg("msg changed")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
