import { useReducer } from "react";
import reducerFunction, { initalState } from "./store";

const App = ()  => {
    const []=useReducer(reducerFunction,initalState)
    return(
      <div className="width100">
        app page
      </div>
    );
  }
  
  export default App;
  