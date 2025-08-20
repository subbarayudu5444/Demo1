import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const callApi = async () => {
    const res = await fetch("http://localhost:8000/hello");
    const data = await res.json();
    setMsg(data.message);
  };
  return (
    <div>
      <h1>Mini React + FastAPI Demo</h1>
      <button onClick={callApi}>Say Hello</button>
      <div>
        {msg && <p>API Response: {msg}</p>}
      </div>
    </div>
  );
}

export default App;
