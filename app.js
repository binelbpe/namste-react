import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste Reac ");
const jsxheading = <h1 id="heading"> Namaste react using JSX</h1>;
//nested structure by arrays.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
console.log(jsxheading);
 