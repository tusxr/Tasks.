import React, { useRef,useState } from 'react'
import Card from './Card';
import TaskModal from './TaskModal';
import Footer from './Footer';

function Foreground() {

const ref = useRef(null);
const [tasks,setTasks]= useState([]);
const [showModal,setShowModal]=useState(false);

const addTask=(taskText)=>{
  const newTask={id:Date.now(),text:taskText};
  setTasks([...tasks,newTask]);
};

const deleteTask=(taskId)=>{
  setTasks(tasks.filter(task=>task.id !== taskId));
};
    return (
    <>
          <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-zinc-800/50 flex gap-5 flex-wrap'>
          {tasks.map((task)=>(
            <Card key={task.id} task={task} onDelete={()=>deleteTask(task.id)}  reference={ref} />
          ))}
          

          <Footer onAddClick={()=>setShowModal(true)} />
            {
              showModal && (
                <TaskModal onClose={()=>setShowModal(false)} onAdd={(text)=>{
                  
                  addTask(text);
                  setShowModal(false);
                }}/>
              )
            }
            </div>
    </>
    )
}

export default Foreground