import { useRef, useState } from "react";

export default function TimerChallange({ title, targetTime }) {
   const [timeStart, setTimeStart] = useState(false);
   const [timeExp, setTimeExp] = useState(false);
   const timeoutRef = useRef(null);

   const handleStart = () => {
      timeoutRef.current = setTimeout(() => {
         setTimeExp(true); // time expiration timer...
      }, targetTime * 1000);
      setTimeStart(true); // timeout is set, so the time is running...
   };

   const handleStop = () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current); // clear the timeout...
         timeoutRef.current = null; // reset the timeout...
      }
      setTimeStart(false); // prevent the time from running...
      setTimeExp(false); // reset the time expiration...
   };

   return (
      <section className="challenge">
         <h2>{title}</h2>
         {timeExp && <p>Time Expired!</p>}
         <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
         </p>
         <p>
            <button onClick={timeStart ? handleStop : handleStart}>
               {timeStart ? "Stop" : "Start"} Timer
            </button>
         </p>
         <p className={timeStart ? "active" : undefined}>
            {timeStart ? "Time is running..." : "Time is inactve..."}
         </p>
      </section>
   );
}
