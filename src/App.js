import { useEffect, useState } from "react";
import Quote from "./Quote";

import CONTEXT_DATA from "./data";
import backgrounds from "./backgrounds";

function App() {
  const [quote, setQuote] = useState({});
  const [background, setBackground] = useState(backgrounds[0]);
  
  const getRandomQuote = () => {
    return CONTEXT_DATA[Math.floor(Math.random() * CONTEXT_DATA.length)];
  }

  const random = Math.floor(Math.random() * 10);


  useEffect(() => {
    setQuote(getRandomQuote);
    setBackground(backgrounds[random]);
  }, [])

  const newQuote = () => {
    setQuote(getRandomQuote);
    setBackground(backgrounds[random]);
  }
  
  return (
    <div className={`h-screen w-screen p-8 ${background} bg-no-repeat object-cover flex flex-col items-center justify-center relative`}>
      <Quote randomQuote={quote} />
      <button 
        className="absolute bottom-20 border-2 p-4 rounded-xl text-white shadow-lg hover:bg-white hover:text-black"
        onClick={newQuote}
      >
        Show Me Another
      </button>
    </div>
  );
}

export default App;
