import { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(0);

  function startStopTimer() {
    setIsRunning(!isRunning);
    
    if (isRunning) {
      clearInterval(timerId);
      return;
    }else {
      const id = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
      setTimerId(id);
    }
  }

  function resetTimer() {
    clearInterval(timerId);
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {Math.floor(time/60).toFixed(0)}:{(time%60).toString().padStart(2, '0')}</p>
      <button onClick={startStopTimer}>{isRunning? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
