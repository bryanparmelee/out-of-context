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

  const random = Math.floor(Math.random() * backgrounds.length);


  useEffect(() => {
    setQuote(getRandomQuote);
    setBackground(backgrounds[random]);
  }, [])

  const newQuote = () => {
    setQuote(getRandomQuote);
    setBackground(backgrounds[random]);
  }
  
  return (
    <div className={`h-screen w-screen ${background} object-cover bg-cover bg-center`}>
      <div className="h-screen w-screen bg-black/20 flex flex-col items-center justify-center relative sm:p-8 p-16">
        <Quote randomQuote={quote} />
        <button 
          className="absolute bottom-20 w-60 p-4 rounded-3xl text-black bg-white shadow-lg hover:bg-black hover:border-2 hover:text-white"
          onClick={newQuote}
        >
          Out of Context
        </button>
      </div>
    </div>
  );
}

export default App;
