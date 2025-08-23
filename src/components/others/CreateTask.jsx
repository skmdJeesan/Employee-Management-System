import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  //const [newtask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("task assigned!");
    const new_task = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    // Update user data with the new task
    const updatedData = userData.map((employee) => {
      if (employee.name === assignTo) {
        // Ensure tasks array exists
        const tasks = employee.tasks || [];

        // Ensure taskCount exists
        const taskCount = employee.taskCount || {
          newTask: 0,
          accepted: 0,
          completed: 0,
          failed: 0,
        };

        return {
          ...employee,
          tasks: [...tasks, new_task],
          taskCount: {
            ...taskCount,
            newTask: (taskCount.newTask || 0) + 1,
          },
        };
      }
      return employee;
    });

    setUserData(updatedData);
    console.log(userData);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
    setAssignTo("");
  };

  return (
    <div className="h-[50%] w-full bg-[#1C1C1C] mt-10 py-4 rounded-xl shadow-2xl">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="h-full w-full flex items-center justify-around gap-5"
      >
        <div className="h-full w-[30%] flex flex-col gap-2">
          <div>
            <h3 className="text-base ml-1 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="w-full outline-none rounded-xl border-1 border-gray-400 py-2 px-2 text-xs"
              type="text"
              placeholder="Enter the task"
            />
          </div>
          <div>
            <h3 className="text-base ml-1 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="w-full outline-none rounded-xl border-1 border-gray-400 py-2 px-2 text-xs"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-base ml-1 mb-1">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="w-full outline-none rounded-xl border-1 border-gray-400 py-2 px-2 text-xs"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-base ml-1 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full outline-none rounded-xl border-1 border-gray-400 py-2 px-2 text-xs"
              type="text"
              placeholder="Enter task category"
            />
          </div>
        </div>

        <div className="h-full w-[35%] flex flex-col gap-3">
          <div>
            <h3 className="text-base ml-1 mb-1">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              className="w-full outline-none rounded-xl border-1 border-gray-400 py-1 px-2 text-md"
              name=""
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </div>
          <button className="w-full rounded-xl py-3 bg-emerald-400 text-center active:scale-95 transition-transform cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
