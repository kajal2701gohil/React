import React, { ChangeEvent, useState } from "react";

const Timer: React.FC = () => {
  let [inputMin, setInputMin] = useState<number>(0);
  let [inputSecond, setInputSecond] = useState<number>(0);
  let [min, setMin] = useState<number>(0);
  let [second, setSecond] = useState<number>(0);
  let repeat: ReturnType<typeof setInterval>;

  const startTime = (): void => {
    min = inputMin;
    second = inputSecond;
    setInputMin(0);
    setInputSecond(0);
    setMin(min);
    setSecond(second);
    repeat = setInterval(timeCount, 1000);
  };

  const timeCount = (): void => {
    if (second <= 0) {
      second = 59;
      min--;
    } else {
      second--;
    }
    if (min <= 0 && second <= 0) {
      clearInterval(repeat);
    }
    setSecond(second);
    setMin(min);
  };

  return (
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-2 text-center">
      <h1>Timer</h1>
      <label htmlFor="minute" className="p-3">
        Enter the minute
      </label>
      <input
        type="number"
        value={inputMin.toString()}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setInputMin(parseInt(e.target.value))
        }
      />
      <br />
      <label htmlFor="second" className="p-3">
        Enter the second
      </label>
      <input
        type="number"
        value={inputSecond.toString()}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setInputSecond(parseInt(e.target.value))
        }
      />
      <br />
      <button onClick={startTime} className="btn btn-success">
        start
      </button>

      <p className="fs-1 fw-bold">
        <span>{min.toString().padStart(2, "0")}</span> :
        <span> {second.toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default Timer;
