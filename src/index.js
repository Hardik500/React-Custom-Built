import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import WebFont from "webfontloader";

//Note: Doesn't prevent CLS
// WebFont.load({
//   google: {
//     families: ["Titillium Web:300,400,700", "sans-serif"],
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
