import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function App() {

  const [input, setInput] = useState("")

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if(input) {
      await addDoc(collection(db, "emails"), {
        email: input,
        timestamp: serverTimestamp()
      })
      setInput("")
    }
  }

  return (
    <div className="emails">
      <form
        className="form"
        onSubmit={submitHandler}
      >
        <p>Sign up to our newsletter</p>
        <input
          className="input"
          type="email"
          placeholder="Enter your email here"
          onChange={inputHandler}
          value={input}
        >
        </input><br></br>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
