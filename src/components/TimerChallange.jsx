import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
   const [timeStart, setTimeStart] = useState(false);
   const [timeExp, setTimeExp] = useState(false);
   const timeoutRef = useRef(null);
   const modalRef = useRef(null);

   const handleStart = () => {
      timeoutRef.current = setTimeout(() => {
         setTimeExp(true); // time expiration timer...
         modalRef.current.showModal(); // show the result modal...
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
      <>
         <ResultModal
            result={timeExp ? "FAILED" : "SUCCEEDED"}
            targetTime={targetTime}
            dialogRef={modalRef}
         />

         <section className="challenge">
            <h2>{title}</h2>
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
      </>
   );
}
