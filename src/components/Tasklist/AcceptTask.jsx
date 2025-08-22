import React from "react";

const AcceptTask = ({task}) => {
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
      <div className="flex gap-7 absolute bottom-5">
        <button className="bg-green-500 py-2 px-3 rounded text-xs">Mark as Completed</button>
        <button className="bg-red-500 py-2 px-3 rounded text-xs">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
