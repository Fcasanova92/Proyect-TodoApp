import React from 'react';
import {TaskList} from './components/TaskList';
import {TaskForm} from './components/TaskForm';
import { useState, useEffect } from 'react';
import { TaskAlert } from './components/TaskAlert';

export const ListApp = () => {

  const [tasks, setTasks] = useState([]);

  const [id, setid] = useState(0);

  const [showAlert, setshowAlert] = useState(false);

  const [message, setmessage] = useState("");

  useEffect(() => {
    if(tasks.length!=0){

      setshowAlert(true)
    }
  }, [tasks]);


  const removeTask = (id) =>{

    const task_update = tasks;

    let index = task_update.findIndex(element => element.id === id);

    task_update.splice(index, 1)

    setTasks([...task_update])

    setmessage("Tarea Eliminada")

  }

  const completeTask = (id) =>{

    const task_complete = tasks;

    let index_complete = task_complete.findIndex(element => element.id === id);

    if(index_complete!=-1){

        task_complete[index_complete].complete = true

        setTasks([...task_complete])

        setmessage("Tarea Completada")
    }


  }


  const onTask = (task_value) =>{

    setid(prevstate => prevstate + 1)

    const task_Obj = {

      id:id,

      value:task_value,

      complete:false
    }

    setTasks([...tasks, task_Obj])

    setmessage("Tarea Agregada")

  }

    return (
      <>
      <section className='principal'>
        <h1 className='title_app'>ListApp</h1>
        <TaskForm onNewTask={onTask} />
        <TaskList newTask={tasks} removeTask={removeTask} completeTask={completeTask} />
        {
          showAlert ?

          <TaskAlert message={message} setshowAlert={setshowAlert} />

          : null

        }
      </section>
      </>
    );
}


