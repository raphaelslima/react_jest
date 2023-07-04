import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("Let's learn more about testing in React");
  const [disable, setDisable] = useState(true);

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{msg}</p>
      <button
        style={{
          background: disable ? "red" : "blue",
          color: "white",
          padding: 10,
        }}
        onClick={() => setMsg("msg changed")}
      >
        Change message
      </button>
    </div>
  );
}

export default App;
