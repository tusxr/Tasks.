import React from 'react'

function Footer({onAddClick}) {
  return (
     <div className='absolute bottom-[5%] w-full py-10 flex justify-center'>
      {/* <button
      className=' bg-zinc-200 h-[40px] w-[100px] rounded-2xl font-semibold '
      onClick={onAddClick}
      >
      Add Task  
      </button>   */}
<button
  onClick={onAddClick}
  className="
    bg-zinc-400 
    h-[40px] 
    w-[100px] 
    rounded-2xl 
    font-semibold 
    text-zinc-800 
    shadow-md 
    transition 
    duration-200 
    ease-in-out 
    transform 
    hover:scale-110 
    hover:bg-zinc-300 
    cursor-pointer
  "
>
  Add Task
</button>

      </div>
  )
}

export default Footer