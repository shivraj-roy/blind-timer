export default function ResultModal({ result, targetTime, dialogRef }) {
   return (
      <dialog className="result-modal" ref={dialogRef}>
         <h2>YOU {result}</h2>
         <p>
            The target time was <strong>{targetTime}</strong> seconds.
         </p>
         <p>
            You stopped the timer with <strong>X seconds left.</strong>
         </p>
         <form method="dialog">
            <button>CLOSE</button>
         </form>
      </dialog>
   );
}
