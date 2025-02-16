import { useState, useRef } from "react";

export default function Player() {
   const [name, setName] = useState("unknown entity");
   const inputRef = useRef();

   const nameHandler = () => {
      setName(inputRef.current.value);
   };

   return (
      <section id="player">
         <h2>Welcome {name}</h2>
         <p>
            <input ref={inputRef} type="text" />
            <button onClick={nameHandler}>Set Name</button>
         </p>
      </section>
   );
}
