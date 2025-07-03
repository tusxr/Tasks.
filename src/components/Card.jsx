import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { motion } from "motion/react"
function Card({task, onDelete, reference}) {
  return (
    
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping:30}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
    <FaRegFileAlt />
    <p className='text-sm leading-tight mt-5 font-semibold'>{task.text}</p>
    <div onClick={onDelete} className='footer absolute bottom-0 w-full left-0 '>
        <div className={`tag w-full py-4 bg-red-600 flex items-center justify-center`}>
        {/* <h3 className='text-sm font-semibold'></h3> */}
        <button>Delete Task </button>
        </div>
    </div>
    </motion.div>
    
  )
}

export default Card