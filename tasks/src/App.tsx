import React from "react";
import "./App.css";
import SimpleComponent from "./Components/SimpleComponent";
import CounterApp from "./Components/CounterApp";
import RealTimeInput from "./Components/RealTimeInput";
import ListComponent from "./Components/ListComponent";
import ToggleSwitch from "./Components/ToggleSwitch";
import APIdata from "./Components/APIdata";
import CalculatorApp from "./Components/CalculatorApp";
import Timer from "./Components/Timer";
import ToDo from "./Components/ToDo";
import DynamicBackground from "./Components/DynamicBackground";

function App() {
  return (
    <div className="App">
      {/* Task:1: “Hello World” Component: Start with the basics. Create a simple React component that renders “Hello, World!” */}
      {/* <SimpleComponent /> */}

      {/* Task:2:Counter App: Build a counter application with buttons to increment and decrement the count. */}
      {/* <CounterApp /> */}

      {/* Task:3:Real-time Input: Create a form that captures user input and displays it in real-time as the user types. */}
      {/* <RealTimeInput /> */}

      {/* Task:4: List Component: Construct a component to display a list of items. */}
      {/* <ListComponent /> */}

      {/* Task:5: Toggle Switch: Implement a basic toggle switch component that changes its state when clicked. */}
      {/* <ToggleSwitch /> */}

      {/* Task:6: API Data Fetch: Develop a component that fetches data from an API and displays it on the page. */}
      {/* <APIdata /> */}

      {/* Task:7: CalculatorApp: Build a simple calculator application with basic arithmetic operations. */}
      {/* <CalculatorApp /> */}

      {/* Task:8 Timer: Create a timer that counts down from a specified time. */}
      {/* <Timer /> */}

      {/* Task:9 To-Do List: Develop a to-do list application with features to add and remove tasks. */}
      {/* <ToDo /> */}

      {/* Task:10 Dynamic Background: Create a component that changes its background color when clicked. */}
      {/* <DynamicBackground /> */}
    </div>
  );
}

export default App;
