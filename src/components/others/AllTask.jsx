import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div id="taskList" className="bg-[#1C1C1C] p-6 mt-7 h-70 rounded-xl overflow-auto">
      <div className="flex justify-between border-2 border-gray-600 rounded py-2 px-6 mb-3">
        <h2 className="w-1/5 text-center font-bold">Employee</h2>
        <h2 className="w-1/5 text-center font-bold">New Task</h2>
        <h2 className="w-1/5 text-center font-bold">Active Task</h2>
        <h2 className="w-1/5 text-center font-bold">Completed</h2>
        <h2 className="w-1/5 text-center font-bold">Failed</h2>
      </div>
      <div>
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className="flex justify-between border-b-2 border-gray-500  rounded py-2 px-6 mb-2 hover:bg-gray-600 transition-transform">
              <h2 className="w-1/5 text-center">{elem.name}</h2>
              <h2 className="w-1/5 text-center">{elem.taskCount.newTask}</h2>
              <h2 className="w-1/5 text-center">{elem.taskCount.active}</h2>
              <h2 className="w-1/5 text-center">{elem.taskCount.completed}</h2>
              <h2 className="w-1/5 text-center">{elem.taskCount.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
