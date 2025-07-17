import "../styles/Home.css";
// Components return jsx - which is javascript function returns html elements
// function Home(props) {
//   //React Fragment <> for returning more than one html elements
//   return (
//     <>
//       <h1>Home Component</h1>
//       <h3>Hello {props.name}, You are {props.age} years old.</h3>
//       <p>This is a paragraph</p>
//     </>
//   );
// }

export default function Home({ name, age }) {
  let id = 3453;
  return (
    <>
      {/* inline styling */}
      <h1 style={{ backgroundColor: "orange", color: "blue" }}>
        Home Component
      </h1>
      {/* external styling */}
      <h3 className="App-Home-Header">
        Hello {name}, You are {age} years old.
      </h3>
      <h3>Your student Id is {id}</h3>
      <p>This is a paragraph</p>
    </>
  );
}
