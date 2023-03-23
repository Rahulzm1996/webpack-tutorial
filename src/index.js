import "./script";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";

console.log("index!!");
const root = ReactDOM.createRoot(document.getElementById("root"));

//WAY 1 to render using react
//NOTE:right now we are rendering JSX and webpack do not have any idea about it.
//To handle JSX correctly we have bablejs which converts ES6+ to ES5 js code
//Now, tell webpack to use loader for converting react and ES6+ code to ES5 which all browsers understand
//["@babel/preset-env", "@babel/preset-react"]
//@babel/preset-env = converts ES6+ and future release to ES5 js code
//@babel/preset-react = converts JSX to ES5 js code
root.render(<h1>Hello World !!</h1>);

//WAY 2 to render using react
//Eventually react converts all the JSX to React.createElement statement
// root.render(React.createElement("h1", null, "Hello World"));
