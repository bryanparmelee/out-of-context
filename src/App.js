import { useEffect, useState } from "react";
import Quote from "./Quote";

import CONTEXT_DATA from "./data";

function App() {
  const [quote, setQuote] = useState({});
  const [bgIndex, setBgIndex] = useState(1);
  
  const getRandomQuote = () => {
    return CONTEXT_DATA[Math.floor(Math.random() * CONTEXT_DATA.length)];
  }

  useEffect(() => {
    setQuote(getRandomQuote);
    setBgIndex(Math.floor(Math.random * 10));
  }, [])

  const newQuote = () => {
    setQuote(getRandomQuote);
    setBgIndex(Math.floor(Math.random * 10));
  }
  
  return (
    <div className={`h-screen w-screen p-8 bg-[url('./assets/galaxy4.jpg')] object-fill flex flex-col items-center justify-center`}>
      <Quote randomQuote={quote} />
      <button 
        className="border-2 p-4 rounded-xl"
        onClick={newQuote}
      >
        Show Me Another
      </button>
    </div>
  );
}

export default App;
