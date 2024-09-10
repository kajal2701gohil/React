import { count } from "console";
import React, { ChangeEvent, MouseEvent, useReducer, useState } from "react";

const CalculatorApp: React.FC = () => {
  const [numbers, setnumbers] = useState<{ a: number; b: number }>({
    a: 0,
    b: 0,
  });

  const [res, setRes] = useState<number>(0);

  const clear = (): void => {
    setRes(0);
    setnumbers({
      a: 0,
      b: 0,
    });
  };
  console.log(numbers);

  return (
    <div className="border border-4 border-white shadow-lg w-25 position-absolute top-50 start-50 translate-middle p-4">
      <header>
        <h1>Calculator Application</h1>
      </header>
      <main>
        <div>
          <form action="">
            <label className="form-label">Number 1</label>
            <input
              type="number"
              className="form-control"
              value={numbers.a}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setnumbers({ ...numbers, a: parseInt(e.target?.value) })
              }
            />
            <label className="form-label">Number 2</label>
            <input
              type="number"
              className="form-control"
              value={numbers.b}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setnumbers({ ...numbers, b: parseInt(e.target?.value) })
              }
            />

            <button
              type="button"
              className="btn my-2 me-2 btn-success"
              onClick={(): void => setRes(numbers.a + numbers.b)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>

            <button
              type="button"
              className="btn  my-2 me-2 btn-danger"
              onClick={(): void => setRes(numbers.a - numbers.b)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            <button
              type="button"
              className="btn  my-2 me-2 btn-warning"
              onClick={(): void => setRes(numbers.a * numbers.b)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <button
              type="button"
              className="btn my-2 me-2 btn-info"
              id="division"
              onClick={(): void => setRes(numbers.a / numbers.b)}
            >
              <i className="fa-solid fa-divide"></i>
            </button>

            <button
              type="button"
              className="btn my-2 me-2 btn-secondary"
              onClick={clear}
            >
              <i className="fa-solid fa-c"></i>
            </button>
          </form>
          <div className="py-2">
            <h5 className="d-inline">
              Result: <span className="resultArea text-primary">{res}</span>
            </h5>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalculatorApp;
