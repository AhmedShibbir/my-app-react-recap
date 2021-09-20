import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyCustomed say = "Great!" greeting = "Congratulations!"></MyCustomed>
      <MyCustomed say = "Wow!" greeting = "Happy Coding!"></MyCustomed>
      <MyCustomed say = "Awesome!" greeting = "Masmarising!"></MyCustomed>
      <MyCustomed say = "Supper!" greeting = "Nice to See!"></MyCustomed>
      <MyCustomed say = "Really!" greeting = "What next!"></MyCustomed>
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
  <div>
    <h1>Loading Users : {users.length}</h1>
    {
      users.map(user => <User name = {user.name} phone = {user.phone} email = {user.email}>

      </User>)
    }

  </div>
  );
}

function User(props){
  return (
    <div style={{
      backgroundColor: "gray",
      border: "2px solid yellow",
      padding: "20px",
      margin: "20px",
      color: "white"
    }}>
      <h1>Name: {props.name}</h1>
      <p>Contact No: {props.phone}</p>
      <h3>Email: {props.email}</h3>

    </div>
  );
}

function MyCustomed(props){
  const [rating, setRating] = useState(0);
  const myStyle = {
    backgroundColor: "salmon",
    border: "2px solid yellow",
    padding: "20px",
    margin: "20px"
  }
  const ratingIncreased = () => {
  const newRating = rating + 1;
    setRating(newRating);
  }
  const ratingDecreased = () => {
  const newRating = rating - 1;
    setRating(newRating);
  }
  return (
    <div style={myStyle}>
      <h1>
        This is my first react App! {props.say}
      </h1>
      <button className = "myBtn" onClick = {ratingIncreased}>
        rate This
      </button>
      <button  className = "myBtn">
          Total Rating : {rating}
      </button>
      <button  className = "myBtn" onClick = {ratingDecreased}>
          Reduce Rating
      </button>
      <h3>{props.greeting}</h3>
    </div>
  );
}
// ----------------------+++++++++++--------------------
/* <div style={{
      backgroundColor: "salmon",
      border: "2px solid yellow",
      padding: "20px",
      margin: "20px"
    }}>
      <h1>
        This is my first react App!
      </h1>
      <button>
        rate This
      </button>
    </div> */
// ------------------+++++-------------------------------
    /* 
    function MyCustomed(props){
  const myStyle = {
    backgroundColor: "salmon",
    border: "2px solid yellow",
    padding: "20px",
    margin: "20px"
  }
  return (
    <div style={myStyle}>
      <h1>
        This is my first react App! {props.say}
      </h1>
      <button>
        rate This
      </button>
      <h3>{props.greeting}</h3>
    </div>
  );
}
    */

// -------------------++++++++---------------------
/* 
function MyCustomed(props){
  const myStyle = {
    backgroundColor: "salmon",
    border: "2px solid yellow",
    padding: "20px",
    margin: "20px"
  }
  return (
    <div style={myStyle}>
      <h1>
        This is my first react App! {props.say}
      </h1>
      <button className = "myBtn">
        rate This
      </button>
      <h3>{props.greeting}</h3>
    </div>
  );
}
*/
export default App;
