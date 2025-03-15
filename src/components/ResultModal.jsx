import { createPortal } from "react-dom";

export default function ResultModal({
   targetTime,
   dialogRef,
   remainingTime,
   onReset,
}) {
   const userLost = remainingTime <= 0;
   const msTime = targetTime * 1000;
   const score = Math.round((1 - remainingTime / msTime) * 100) + "%";

   return createPortal(
      <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
         {userLost && <h2>YOU LOST</h2>}
         {!userLost && <h2>YOUR SCORE: {score} </h2>}
         <p>
            The target time was <strong>{targetTime}</strong> seconds.
         </p>
         <p>
            You stopped the timer with{" "}
            <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong>
         </p>
         <form method="dialog" onSubmit={onReset}>
            <button>CLOSE</button>
         </form>
      </dialog>,
      document.getElementById("modal")
   );
}
