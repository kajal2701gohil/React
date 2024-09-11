import React from "react";

const ListComponent: React.FC = () => {
  const list: string[] = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Papaya",
    "Guava",
    "Pomegranate",
  ];

  return (
    <div className="text-center p-5 position-absolute top-50 start-50 translate-middle">
      <h1 className="text-decoration-underline">List-Component</h1>
      <div>
        <ul className="p-2">
          {list?.map((x: string, i: number) => (
            <li key={i} className="bg-dark text-white my-2 py-2 rounded">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
