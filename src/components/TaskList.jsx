import React from 'react';
import { TaskItem } from './TaskItem';


export const TaskList = ({newTask, removeTask, completeTask}) => {

    console.log(newTask)
    
    return (
    
        <>
        <section className='secundaria'>
        <h3 className='title'>Tareas:</h3>
        <hr />
        <ul>
            {


                newTask.map(element => (

                    !element.complete ?


                    <TaskItem 

                    key={element.id}
                    
                    task={element}

                    removeTask={removeTask}

                    completeTask={completeTask}
                   
                   />
                   :null
                ))
            }
        </ul>

        <h3>Finalizadas:</h3>
        <hr />
            
         <ul>

          
            {


                    newTask.map(element => (

                    element.complete ?

                    <TaskItem 

                    key={element.id}
                    
                    task={element}

                    removeTask={removeTask}

                    completeTask={completeTask}
                
                />
                 :null
                ))
            }


         </ul>

         </section>


        </> );
}



