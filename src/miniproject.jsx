// import React, { Component } from 'react';
// class Welcome extends Component {
// render() {
// return(
// <div>
// <h1>Welcome to React</h1>
// <img src = "https://d502jbuhuh9wk.cloudfront.net/courses/65153fe6e4b0d3b4ba00991f/65153fe6e4b0d3b4ba00991f_scaled_cover.jpg?v=2" width = "600" height= "400"></img>
// <p>React is a popular, open-source JavaScript library used to build user interfaces (UIs) for websites and mobile apps. </p>
// </div> 
// )
// }
// }
// export default Welcome;
// // Date: 22-05
// import { useState } from 'react';
//  function App() {
//  // Declare a state variable 'count' with initial value 0  
// const [count, setCount] = useState(0);  
// function increment() {  
// setCount(count + 1); // Update state
//  }
//  function decrement() {  
// setCount(count - 1); // Decrease state  
// }
//  function reset() { setCount(0); }
//  return (  
//  <div>
//     <h2>count: {count} </h2>
//     <button onClick={increment}> + Increment </button>
//      <button onClick={decrement}> - Decrement </button>
//      <button onClick={reset}> Reset</button>
//  </div>
// );
// }
 
// export default App;
//  import { useState } from 'react';  
 
// function ToggleMessage() {  
// const [isVisible, setIsVisible] = useState(false);  
 
// function toggleMessage(){  
// setIsVisible(!isVisible);
//  }  
// return (  
// <div>
// <button onClick={toggleMessage}>
//  {isVisible ? "Hide Message" : "Show Message"}
// </button>
//  {isVisible && <p>Hello! I am now visible. </p>}
// </div>
// );
//  }
// export default ToggleMessage;
// Props concept
// function App(){
//     return(
//         <div>
//             <Greeting name="Rashmika"/>
//             <Greeting name="Rashi"/>
//             <Greeting name="Ruffy"/>
//         </div>
//     )
//     function Greeting({name}) {
//     return <h2>Hello,{name}! Welcome to React.</h2>;          
//     }
// }
// export default App;
// // task-1
// import { useState } from 'react'; 
//                             function NameInput() { 
//                               const [name, setName] = useState(''); 
 
//                            function handleChange (event) {  
//                                setName(event.target.value); // update state on every keystroke  
 
//                            } return ( 
//                                 <div> 
//                                     <input type= "text" placeholder="Enter your name" value={name} 
//                                     onChange={handleChange} /> 
 
//                              <p>Hello, {name}!</p> 
//                                  </div> 
//                            );
//                         }
// export default NameInput;
// import React, { useState } from "react";
// import { useState } from "react";

// function BDMonth() {
//   const [month, setMonth] = useState("");

//   return (
//     <div>
//       <select onChange={(e) => setMonth(e.target.value)}>
//         <option>Select Month</option>
//         <option>January</option>
//         <option>February</option>
//         <option>March</option>
//         <option>April</option>
//         <option>May</option>
//         <option>June</option>
//         <option>July</option>
//         <option>August</option>
//         <option>September</option>
//         <option>October</option>
//         <option>November</option>
//         <option>December</option>
//       </select>

//       <p>Your birth month is {month}</p>
//     </div>
//   );
// }

// export default BDMonth;
// task-2
// import { useState } from "react";

// function User() {
//   const [details, setDetails] = useState({
//     name: "",
//     city: ""
//   });
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter name"
//         onChange={(e) =>
//           setDetails({ ...details, name: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Enter city"
//         onChange={(e) =>
//           setDetails({ ...details, city: e.target.value })
//         }
//       />
//       <h3>Name: {details.name}</h3>
//       <h3>City: {details.city}</h3>
//     </div>
//   );
// }
// export default User;
// date: 23-05
// function App(){
//   const fruits = ["Apple", "Banana", "Cherry"];
//   return(
//     <div>
//       <h1>Fruits List</h1>
//       {fruits.map((fruit) => (
//         <h1>{fruit}</h1>
//       ))}
//     </div>
//   )
// }
// // export default App;
// import React,{ createContext } from "react";
// import Child from "./child";
// export const UserContext = createContext();
// function App() {  
 
// return (
//     <UserContext.Provider value="Rashmika">
//         <Child />
//     </UserContext.Provider>
// );
// }
   
// export default App;
// day 14 last 2 topics
// import { useState } from 'react';  
 
// function App() {  
// const [message, setMessage] = useState('No button clicked yet.');  
// function handleButtonClick(btnName) {
//  setMessage(`You clicked: ${btnName}`);  
// }
 
// return(
// <div>
// <p>{message}</p>
// <ActionButton label = "Save" onClick={handleButtonClick} />
// <ActionButton label= "Delete" onClick={handleButtonClick}/>
// </div>
 
// );
// }
// // Child Component  
// function ActionButton({ label, onClick }) {
//  return (
// <button onClick={() => onClick(label)} >{label}</button>
// );
// }
   
// export default App;
//  import React from 'react';
//  function UserGreeting({ name = "Guest" })
//  {  
//      return <h1>Hello, {name}!</h1>;  
// }  
// // Usage:
//  export default function App() {
//      return (  
//        <div>
//        <UserGreeting name="Rashi" />  
//        <UserGreeting />  
//  </div>
//  );
//  }
// task 3 useReducer Hook
// import React, { useReducer} from "react";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// function Counter() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     return (
//         <div>
//             <h2> {state.count}</h2>
//             <button onClick={() => dispatch({ type: "increment" })}>
//                 Increment
//             </button>
//             <button onClick={() => dispatch({ type: "decrement" })}>
//                 Decrement
//             </button>
//         </div>
//     );
// }
// export default Counter;
// import { useState, useMemo } from "react";
// function Example(){
//     const [num, setNum] = useState(0);
//     const cube = useMemo(() => {
//         return num * num * num;
//     }, [num]);
//     return(
//         <div>
//         <h2>Num: {num} </h2>
//         <h2>Cube: {cube} </h2>
//         <button onClick={() => setNum(num + 1)}>Increment</button>
// </div>
//     );
// }
// export default Example;