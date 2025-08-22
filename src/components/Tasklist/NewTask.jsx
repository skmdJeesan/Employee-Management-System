import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className="h-[90%] w-[300px] bg-violet-400 rounded-xl flex-shrink-0 p-5 relative">
      <div className="flex items-center justify-between">
        <h2 className="bg-red-400 py-1 px-3 rounded-lg">{task.category}</h2>
        <h3 className="text-sm">{task.taskDate}</h3>
      </div>
      <h1 className="mt-4 mb-6 text-2xl font-bold">
        {task.taskTitle}
      </h1>
      <p className="text-base leading-[1.1]">{task.taskDescription}</p>
      <div className="absolute bottom-5 w-[85%]">
        <button className='bg-blue-500 w-full py-2 rounded text-xs'>Accept</button>
      </div>
    </div>
  )
}

export default NewTask
