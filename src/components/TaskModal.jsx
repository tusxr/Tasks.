import React, { useState } from 'react'


function TaskModal({onClose,onAdd}) {
  const [text,setText]=useState('');
  
  const handleAdd=()=>{
    if(text.trim()){
        onAdd(text.trim());
        setText('');
    }
  };
    
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-zinc-400 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center text-zinc-700">Add Task</h2>
        <input
          type="text"
          placeholder="Enter your task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-200"
        />
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={handleAdd}
            className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-500 transition"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-zinc-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal