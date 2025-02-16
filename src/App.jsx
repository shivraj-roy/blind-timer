import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

function App() {
   return (
      <>
         <Player />
         <div id="challenges">
            <TimerChallange title="EASY" targetTime={1} />
            <TimerChallange title="NORMAL" targetTime={3} />
            <TimerChallange title="HARD" targetTime={5} />
            <TimerChallange title="EXPERT" targetTime={10} />
         </div>
      </>
   );
}

export default App;
