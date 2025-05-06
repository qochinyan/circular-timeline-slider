import React from "react";
import TimeSliderBlock from "./components/TimeSliderBlock/TimeSliderBlock";
import { sampleData } from "./components/TimeSliderBlock/sampleData";
import "./App.scss";
import "./styles/global.scss";

const App = () => (
  <div className="app-container">
    <TimeSliderBlock sampleData={sampleData} />
    {/* при добавлении одного токого же блока, не наруаются стили и логика */}
    {/* <TimeSliderBlock sampleData={sampleData} /> */}
  </div>
);

export default App;
