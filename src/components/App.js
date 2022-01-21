import React, {useState} from "react";
import { format } from "date-fns";
import TestComponent from "./TestComponent";
import ExampleComponent from "./ExampleComponent";

      
// <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
// Add your code own within the return statement
function App() {
  const [clicked, setClicked] = useState(false)

  const updateState = () => {
    setClicked(!clicked)
  }

  console.log(`just why doesn't console.log work?`)
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <button onClick={updateState}>{clicked ? "show":"hide"}</button>
      {
        clicked && 
        <ExampleComponent>
          <TestComponent />
        </ExampleComponent>
      }
    </div>
  );
}

export default App;
