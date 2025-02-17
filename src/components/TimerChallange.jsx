import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
   const [timeLeft, setTimeLeft] = useState(targetTime * 1000); // time left in milliseconds...
   const timeoutRef = useRef(null); // store the timeout...
   const modalRef = useRef(null); // store the modal...

   const timeIsActive = timeLeft > 0 && timeLeft < targetTime * 1000;

   if (timeLeft <= 0) {
      clearInterval(timeoutRef.current);
      modalRef.current.showModal();
      timeoutRef.current = null;
   }

   function handleReset() {
      setTimeLeft(targetTime * 1000);
   }

   const handleStart = () => {
      timeoutRef.current = setInterval(() => {
         setTimeLeft((prevTime) => prevTime - 10); // time left in every 10ms...
      }, 10);
   };

   const handleStop = () => {
      if (timeoutRef.current) {
         modalRef.current.showModal(); // show the result modal...
         clearInterval(timeoutRef.current); // clear the timeout...
         timeoutRef.current = null; // reset the timeout...
      }
   };

   return (
      <>
         <ResultModal
            remainingTime={timeLeft}
            onReset={handleReset}
            targetTime={targetTime}
            dialogRef={modalRef}
         />

         <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
               <button onClick={timeIsActive ? handleStop : handleStart}>
                  {timeIsActive ? "Stop" : "Start"} Timer
               </button>
            </p>
            <p className={timeIsActive ? "active" : undefined}>
               {timeIsActive ? "Time is running..." : "Time is inactive..."}
            </p>
         </section>
      </>
   );
}
