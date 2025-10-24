import { useState } from "react";
import "./App.css";
import Header from "./components//Header/index.jsx";
import Hero from "./components//Header/hero.jsx";
import Statistics from "./components//Header/statics.jsx";
import Boost from "./components//Header/boost.jsx";
import Footer from "./components/Header/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
