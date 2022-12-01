import { useEffect, useState } from "react";
import Quote from "./Quote";

import CONTEXT_DATA from "./data";

function App() {
  const [quote, setQuote] = useState({});
  
  const getRandomQuote = () => {
    return CONTEXT_DATA[Math.floor(Math.random() * CONTEXT_DATA.length)];
  }

  useEffect(() => {
    setQuote(getRandomQuote);
  }, [])

  const newQuote = () => setQuote(getRandomQuote);
  
  return (
    <div className="App">
      <Quote randomQuote={quote} />
      <button onClick={newQuote}>Show Me Another</button>
    </div>
  );
}

export default App;
