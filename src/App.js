import React from "react";
// Pages and Components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}
