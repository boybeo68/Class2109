import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [toggleBody, setToggleBody] = useState(true);
  return (
    <div className="app">
      <Header />
      {toggleBody ? <Body /> : null}
      <button
        onClick={() => {
          setToggleBody(!toggleBody);
        }}
      >
        ToggleBody
      </button>
      <Footer />
    </div>
  );
}

export default App;
