import React, { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="container border border-3 border-secondary text-center p-5 position-absolute top-50 start-50 translate-middle">
      <h1 className="text-decoration-underline">Counter-App</h1>
      <div>
        <h2>{count}</h2>
        <button
          className="btn btn-danger m-3"
          onClick={(): void => setCount((e) => e + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-success m-3"
          onClick={(): void => setCount((e) => e - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
