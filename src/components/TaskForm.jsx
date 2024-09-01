import React from 'react';
import { useState } from 'react';


export const TaskForm = ({onNewTask}) => {

    const [inputValue, setinputValue] = useState("");

    const oneChangeTask = (event) =>{

        setinputValue(event.target.value)
    }

    const addTaskSubmit = (event)=>{  // obtener el valor del input y enviarlo al componente de tarea
        event.preventDefault()
        onNewTask(inputValue)
    }
 
    return (
       <>

        <form id="form" className='form-control' action="" style={{display:"flex", flexFlow:"column", alignItems:"center"}}>
        <h3>Ingresa una Tarea</h3>
        <label htmlFor="">

        <input  
        value={inputValue}
        onChange={oneChangeTask} 
        name="" id="" 
        style={{width:"300px", height:"100px"}}/>
        
        </label>
        <button onClick={addTaskSubmit} className='btn btn-primary'>Agregar Tarea</button>
       </form>
       </>
    );
}


