import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
   return (
      <>
         <Player />
         <div id="challenges">
            <TimerChallenge title="EASY" targetTime={1} />
            <TimerChallenge title="NORMAL" targetTime={3} />
            <TimerChallenge title="HARD" targetTime={5} />
            <TimerChallenge title="EXPERT" targetTime={10} />
         </div>
      </>
   );
}

export default App;
