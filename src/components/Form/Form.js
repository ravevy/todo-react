import { useEffect, useState } from "react"

function Form({todos, setTodos}){
  const [input, setInput] = useState("")

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  const inputSubmit = (e) => {
    e.preventDefault();
    if(input !== ""){
    setTodos([...todos, {value: input, done: false}])
    setInput("")}
  }

  useEffect(()=>{localStorage.setItem("todos", todos)}, [todos])

  return <form onSubmit={inputSubmit} className="form">
    <input type="text" onChange={inputChange} value={input} placeholder="What's your plan?"/>
  </form>

}

export default Form