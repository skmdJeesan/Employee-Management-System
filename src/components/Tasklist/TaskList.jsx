import React, { useContext } from "react";
import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // find the current employee from context by id (or fallback to prop)
  const employee = userData?.find((e) => e.id === data.id) || data;
  const tasks = employee.tasks || [];

  // helper: immutably update a task for this employee
  const updateTaskForEmployee = (taskTitle, updater) => {
    setUserData((prev) =>
      prev.map((emp) => {
        if (emp.id !== employee.id) return emp;
        const newTasks = emp.tasks.map((t) =>
          t.taskTitle === taskTitle ? { ...t, ...updater(t) } : t
        );

        // update taskCount safely if present
        const newTaskCount = { ...(emp.taskCount || {}) };
        if (updater._countChanges) {
          Object.keys(updater._countChanges).forEach((k) => {
            newTaskCount[k] = (newTaskCount[k] || 0) + updater._countChanges[k];
          });
        }

        return { ...emp, tasks: newTasks, taskCount: newTaskCount };
      })
    );
  };

  // Function to handle task acceptance
  const handleAcceptTask = (task) => {
    updateTaskForEmployee(task.taskTitle, (old) => {
      const ret = { active: true, newTask: false };
      ret._countChanges = { newTask: -1, accepted: +1 }; // used by helper
      return Object.assign(ret, { _countChanges: ret._countChanges });
    });
  };

  // Function to handle task completion
  const handleCompleteTask = (task) => {
    updateTaskForEmployee(task.taskTitle, (old) => {
      const ret = { active: false, completed: true };
      ret._countChanges = { accepted: -1, completed: +1 };
      return Object.assign(ret, { _countChanges: ret._countChanges });
    });
  };

  // Function to handle task failure
  const handleFailTask = (task) => {
    updateTaskForEmployee(task.taskTitle, (old) => {
      const ret = { active: false, failed: true };
      ret._countChanges = { accepted: -1, failed: +1 };
      return Object.assign(ret, { _countChanges: ret._countChanges });
    });
  };

  return (
    <div id="taskList" className="flex items-center gap-5 h-[55%] mt-10 overflow-x-auto">
      {tasks.map((elem) => {
        // use a stable key like elem.id if available; fallback to title
        const key = elem.id || elem.taskTitle;
        if (elem.active)
          return <AcceptedTask key={key} task={elem} onComplete={handleCompleteTask} onFail={handleFailTask} />
        if (elem.completed) return <CompletedTask key={key} task={elem} />;
        if (elem.failed) return <FailedTask key={key} task={elem} />;
        // newTask or fallback
        return <NewTask key={key} task={elem} onAccept={handleAcceptTask} />;
      })}
    </div>
  );
};

export default TaskList;
