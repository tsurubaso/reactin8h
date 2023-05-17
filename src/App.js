import "./App.css";
import { useState } from "react";

/* notes 1
import {User} from "./User.js";

const name=<h1>Sylvain</h1>;
const age=<h2>50</h2>;
const email=<h2>Sylvain@gmail.com</h2>;

const User2=(<div>
  {name}{email}{age}</div>)

  const User =()=>{

  return(
    <div>
    <h1>Sylvain</h1>
    <h1>50</h1>
    <h1>sylvain.bilhaud@gmail.com</h1>
    </div>
    )
}

  <User3 name="jake" age={21} email="bloublou@gmail.com" />
  <User3 name="sandra" age={23} email="bloibloi@gmail.com" />
  <User3 name="pierre" age={26} email="blouniblou@gmail.com" />
  <h1 className="name" >Lui</h1>

  const User3=(props)=>{

  return(
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
    </div>
    )

    {age>= 18?<h1>Over Age</h1>:<h1>Under Age</h1>}
const isGreen=true;
    <h1 style={{color:isGreen ? "green":"red"}}>This has color</h1>
{ isGreen && <button>This is a button</button>}

}

const names = ["da", "dad", "er", "rt", "ty", "uy", "iu"];
 {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
  

const users=[
  {name:"pedro ",email:"pedro",password:"asdffds",age:"23"},
  {name:"sadg ",email:"pedro",password:"asdffds",age:"4123"},
  {name:"sgao ",email:"pedro",password:"asdffds",age:"242"},
  {name:"pgsa ",email:"pedro",password:"asdffds",age:"242"}
]

     {users.map((user,key)=>{
      return<User name={user.name} age={user.age}/>
     })}


         <div className="App">
      {planets.map((planet,key)=>{
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>;
      })}


    </div>


    const planets=[
  {name:"Mars",email:"pedro",password:"asdffds",age:"23",isGasPlanet:false},
  {name:"Earth",email:"pedro",password:"asdffds",age:"4123",isGasPlanet:false},
  {name:"Jupiter",email:"pedro",password:"asdffds",age:"4123",isGasPlanet:true},
  {name:"Venus",email:"pedro",password:"asdffds",age:"242",isGasPlanet:false},
  {name:"Neptune",email:"pedro",password:"asdffds",age:"242",isGasPlanet:true},
  {name:"Uranus",email:"pedro",password:"asdffds",age:"242",isGasPlanet:true}
]
{planets.map((planet,key)=>planet.isGasPlanet && <h1>{planet.name}</h1>
*/
/*notes 2
 {age} <button onClick={increaseAge}>Increase Age</button>
const[age,setAge] =useState(0);
const increaseAge=()=>{
setAge(age+1);};


<div className="App">
      <input type="text" onChange={handleInputChange}/>
      {inputValue}
    </div>

    
    function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
          console.log(showText)
        }}
      >
        Show/Hide
      </button>
      {showText && <h1>Hi my name is Taro</h1>}
    </div>
  );
}
*/
/* notes3
function App() {
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor==="black"?"red":"black")
        }}
      >
        Show/Hide
      </button>
       <h1 style={{color:textColor}}>Hi my name is Taro</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increase=() =>{setCount(count+1);};
  const decrease=() =>{setCount(count-1);};
  const setToZero=() =>{setCount(0);};

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
      
    </div>
  );
}

*/
/* notes4
 */
//you can also transform App.css to App.module.css and then
//you can use import styles from blabla..this ios an object
// className={styles.name} and so on
//&& if something is true then do this
//avoid haifun "-" background-color>>>>backgroundColor
// looping in an array, add the key to avoid the worning

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handelChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
    });
    setTodoList(newTodoList); 
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handelChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>{" "}
              <button onClick={() => deleteTask(task)}>X</button>{" "}
            </div>
          );
        })}

        
      </div>
    </div>
  );
}

export default App;
