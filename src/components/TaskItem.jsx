import React from 'react';

export const TaskItem = ({task, removeTask, completeTask}) => {

    return (

        <>

        <li id="task" style={{color:task.complete ? "green" : "none", fontWeight:"bolder"}}> 
        
            <p id="task_value">{task.value}</p> 

        <button  className='btn btn-primary' onClick={()=>{completeTask(task.id)}} style={{display:task.complete ? "none" : "static"}}><span class="material-symbols-outlined">
done
</span></button>
        <button  className='btn btn-danger' onClick={()=>{removeTask(task.id)}}><span class="material-symbols-outlined">
delete
</span></button> 
        
        </li>
        <hr />
        </>
    )
}


