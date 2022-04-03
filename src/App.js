import React, { useState, useEffect } from 'react';
import './style.css';

// 2. How React Works
// Data --> Data Gets Displayed --> Data updates --> Which updates the UI(Auto once you define components)
// Fetch data from the server, gets your data Displayed on the screen. so you write react components to do that. The user then interacts to you website which makes cause the data to update. That is going to update the UI automatically. The beauty of react

// 3. Think in React by Breaking your UI into Components
// Container {
//   SearchBar{}
//   TodoList{
//     TodoItem
//     TodoItem
//   }
// }
// Everythink we going to breaks into custom components And display that on screen so here we have a todolist And we wrap the whole thing into the Container an then we have a searchbar seperate from the todolist itself. Inside the todolist there are 4 todoitems.

// 4. Write a Custom Function components in React with JSX
// To define a custom components we can just write regular function, Capital letter notice for conventions
// JSX look like html but actually a javascripts compile by babel tanspile to the browser

// 5. Building a Tree of UI components in React with Children or with Self-closing tags
// 6. Reusing Custom React Components by Passing Data Down as Props
// 7. Create State Data that can change in a React Component with useState
// 8. Create a Button in React that Changes Local State and automatically Updates the UI

// function Greeting(props) {
//   // const name = 'React';
//   const [count, setCount] = useState(5);
//   // the first array used to value of that state, 2 array used to update that state
//   // we going to change of the components automatically rerender Display our components
//   const updateCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Hello, {props.name}!</h1>
//       <p> You've clicked {count} times </p>
//       <button onClick={updateCount}>Click me</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       {/* Now To use the greeting we can use a regular tag  */}
//       <Greeting name="React" />
//       <div>
//         {/* Independent each other not connected anyway */}
//         {/* Each component its own internal state */}
//         <Greeting name="Chris" />
//       </div>
//     </div>
//   );
// }

// 9. Display a List in React by Looping Over an Array of Items.
// const Data = [
//   { id: 4, title: 'A New Hope' },
//   { id: 5, title: 'The Empire Strike Back' },
//   { id: 6, title: 'Return of the Jedii' },
// ];

// function MyList(props) {
//   return (
//     <div>
//       {props.items.map((item) => {
//         // a key is react specific a react which paragraph tag
//         return <p key={item.id}>{item.title}</p>;
//       })}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <MyList items={Data} />
//     </div>
//   );
// }

// 10. Adding Styles to React components with CSS or Inline Styles

// class keyword reserved in js
// function NormalCSS() {
//   return <p className="big-text">Big</p>;
// }

// function InLineStyle() {
//   return <p style={{ fontSize: 20, color: '#0000FF' }}>Blue Text</p>;
// }

// export default function App() {
//   return (
//     <div className="App">
//       <NormalCSS />
//       <InLineStyle />
//     </div>
//   );
// }

// 11. Perform Asynchronous Actions (like fetching http data) in React with useEffect.
// Perform any side effect we are going to use useEffect in react

function GetData(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    // useEffect how we get into data fetch in our app.
    fetch('https://swapi.dev/api/people/' + props.id)
      .then((response) => response.json())
      .then((result) => setData(result));
    // which is array dependencies, if any time the props.id change will rerun useEffect to fetch the new person
  }, [props.id]);

  // then we dont set this array here then it will rerun the useEffect whenever data changes. So if i had nothing here. then what would happen is the useEffect would run. it would set the data which would change data. which would  rerun the component and rerun the useEffect and that would get infinte loop. care when useEffect to always set your dependencies correctly.

  return (
    <div>
      <p> Name: {data && data.name}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <GetData id={1} />
    </div>
  );
}
