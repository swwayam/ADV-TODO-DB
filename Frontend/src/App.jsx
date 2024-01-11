import { useState , useEffect} from "react";
import './App.css'


function App() {

  const [text,setText] = useState('')
  const [submit, setSubmit] = useState('')
  const [date, setDate] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    const dateData = new Date()
    const date = dateData.toLocaleDateString("en-us", {weekday: "long", year:"numeric", month:"short", day:"numeric"})
    setDate(date)
  }, [])

  function takeInputOnChange(event){
    // console.log(event.target.value);
    setText(event.target.value)
  }

  function addTodo(event){
    event.preventDefault()
    setSubmit(text)
    setData(text)
    console.log(text);
  }

  return (
    <>
     <header className="header">
      <h1>Todo</h1>
      <h3>{date}</h3>
    </header>
    <main>
      <div className="todo-input">
        <form className="form">
          <input type="text" id="todo" name="todo" onChange={takeInputOnChange} />
          <button type="submit" className="add-btn" onClick={addTodo}>+</button>
        </form>
        <div className="delete">
          <button id="clear-btn">Clear All</button>
        </div>
      </div>

      <div className="todos">
        <ul id="todo-list" className="list-group">
        <li className="list-group-item p-3">
            <input className="form-check-input me-1" id="todo-2" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-2">
            <strike>{data}</strike>  
            </label>
          </li>
        </ul>
      </div>
    </main>
    {/* Add a navbar */}
    {/* Add the css */}
      {/* <input type="text" onChange={takeInputOnChange} />
      <button onClick={addTodo}>Submit</button>
      <h1>{text}</h1> */}
    </>
  );
}

export default App;
