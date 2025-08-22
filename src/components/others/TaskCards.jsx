import React from "react";

const TaskCards = ({data}) => {
  return (
    <div className="mt-12 flex items-center flex-wrap gap-7">
      <div className="bg-red-400 rounded-2xl w-[22%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 rounded-2xl w-[22%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="bg-green-400 rounded-2xl w-[22%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="bg-violet-400 rounded-2xl w-[22%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskCards;
