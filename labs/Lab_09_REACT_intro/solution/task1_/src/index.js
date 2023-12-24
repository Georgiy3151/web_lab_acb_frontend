import React from "react";
import reactDom from "react-dom";
import Counter from "./components/counter";

const App=()=>{
    return <Counter />;
}
reactDom.render(<App />, document.getElementById("root"));