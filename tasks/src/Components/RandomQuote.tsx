import React, { useEffect, useState } from "react";

const RandomQuote: React.FC = () => {
  const [Quotes, setQuotes] = useState<
    { id: number; quote: string; author: string }[]
  >([]);

  const [random, setRandom] = useState<number>(0);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes));
  }, []);

  const getRandom = (): void => {
    setRandom(Math.floor(Math.random() * Quotes.length));
  };

  return (
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-3 h-25 bg-secondary text-white ">
      <h5 className="h-50 overflow-hidden">{Quotes[random]?.quote}</h5>
      <h6 className="pt-2 text-end"> - {Quotes[random]?.author}</h6>
      <div className="text-center">
        <button className="btn btn-danger" onClick={getRandom}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
