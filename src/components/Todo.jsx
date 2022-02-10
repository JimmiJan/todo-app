 import React, { useState } from 'react'
 import "./todo.css"

const Todo = () => {

    const[inputlist,setinput] =useState("")

    const[items,setitems] =useState([])


    const itemEvent =(event)=>{
         setinput(event.target.value);
    }


 const listoff=()=>{
    setitems((olditems)=>{
        return[...olditems, inputlist]
    })
    setinput("");
 }

 

 const remove=()=>{
    
 }

  return (
    <div>
      <div className='main-div'>
       <div className='center-div'>
           <br />
           <h1>TODO APP</h1>
           <br />
           <input type="text" placeholder='Add Todo' onChange={itemEvent}
           value={inputlist}
           />
        <button className='' onClick={listoff}> +</button>
        <button className='btns' onClick={remove}> Del </button>

        <ul>
        {  items.map((itemvalue)=>{
            return <li>{itemvalue}</li>

          })}
        
            {/* <li>{inputlist}</li> */}
        </ul>

       </div>
      </div>
    </div> 
  )
}

export default Todo
