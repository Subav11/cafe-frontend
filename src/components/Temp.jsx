import React from "react";
// function Temp({ flag }) {
//   return (
//     <>
//       if(flag) return <h1>Flag is true</h1>
//       else return <h1>Flag is False</h1>
//     </>
//   );
// }

// function Temp({ flag }) {
//   return flag ? <h1>Flag is true</h1> : <h1>Flag is False</h1>;
// }

// function Temp({ flag }) {
//   return flag && <h1>Flag is true</h1>
// }

// function Temp() {
//   const handleClick = () => {
//     alert("Hello World");
//   };
//   const handleSubmit = (name) => {
//     alert(`Hello ${name}`);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <button onClick={()=>handleSubmit("John")}>Submit</button>
//     </div>
//   );
// }
import { useState } from "react";
function Temp() {
  const [score, setScore] = useState(0);
  const updateScore = () => {
    setScore(score + 1);
  };

  const decrement = () => {
    setScore(score - 1);
  }
  return (
    //this score section is re rendering whenever we are clicking on updateScore button,
    //that means it stores the value in score which is a state var and setScore function is used to upadte that score var
    //but when we refresh the page score will take initial value as 0
    <div>
      {score}
      <p>
        <button onClick={updateScore}>Update Score</button>
        <button onClick={decrement}>Decrement Score</button>
      </p>
    </div>
  );
}
export default Temp;
