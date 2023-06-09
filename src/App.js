import "./App.css";
import Axios from "axios";
import { useState  } from "react"; //useEffect

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

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handelChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  const completeTask=(id)=>{
setTodoList(
  todoList.map((task)=>{
if(task.id===id){return {...task,completed:true} }else{
  return task;
}}


  ))
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
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

 */
/* notes 5
  useEffect(()=>{

    console.log("Component Mounted");
    return ()=>{
      console.log("Component Unmounted");
    };
  },[]) //et si tu rajoute dans [] c<est quand c<est updated
*/
/* notes 6
  fetch("https://catfact.ninja/fact")
.then((response)=>response.json())
.then((data)=>{

console.log(data);

})

function App() {

  const [catFact,setCatFact]=useState("");

  const fetchCatFact=()=>{
    Axios.get("https://catfact.ninja/fact").then((response)=>{
      setCatFact(response.data.fact);
    });
    
  }
useEffect(()=>{
  fetchCatFact();
  
},[]);



 
return  (
  <div className="App">
<button onClick={fetchCatFact}>Generate cat fact</button>
<p>{catFact}</p>


  </div>
);
  

}
*/
/* notes 7

function App() {
  const [name,setname]=useState("");
  const [PredictedAge,setPredictedAge]=useState(null);


const fetchData = () => {

Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
  setPredictedAge(response.data);
});
}

  return (
    <div className="App">
      <input placeholder="ex.Pedro..." onChange={(event)=>{
        setname(event.target.value)
      }}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {PredictedAge?.name}</h1>
      <h1>Predicted Age: {PredictedAge?.age}</h1>
      <h1>Count: {PredictedAge?.count}</h1>
  
    </div>
  );
}
 */
/* notes 8


*/ 

//you can also transform App.css to App.module.css and then
//you can use import styles from blabla..this ios an object
// className={styles.name} and so on
//&& if something is true then do this
//avoid haifun "-" background-color>>>>backgroundColor
// looping in an array, add the key to avoid the worning
//mounting updating unmounting
//useState UseEffect
//PredictedAge?.name ===>>> try to access this if not null

function App() {

  const [generateExcuse,setGenerateExcuse]=useState("");


  const fetchExcuse = (excuse) => {
  
  Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((response) => {
    setGenerateExcuse(response.data[0].excuse);
  });
  }
 return (
    <div className="App">

<h1>Generate an Excuse</h1>
<button onClick={()=> fetchExcuse("party")}>Party</button>
<button onClick={()=> fetchExcuse("family")}>Family</button>
<button onClick={()=> fetchExcuse("office")}>Office</button>

<p>{generateExcuse}</p>
  
    </div>
  );
}

export default App;
