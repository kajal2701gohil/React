import React, { useState } from "react";

const Timer: React.FC = () => {
  const [getTime, setGetTime] = useState("");
  console.log(getTime);
  return (
    <div>
      <h1>Timer</h1>
      <input type="time" onChange={(e) => setGetTime(e.target.value)} />
    </div>
  );
};

export default Timer;
