import React from "react";
import AcceptedTask from "./AcceptedTasked";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <div id="taskList" className="flex items-center gap-5 h-[55%] mt-10 overflow-x-auto">
      {data.tasks.map((elem,idx) => {
        if(elem.active) return <AcceptedTask key={idx} task={elem}/>
        if(elem.completed) return <CompletedTask key={idx} task={elem} />
        if(elem.failed) return <FailedTask key={idx} task={elem} />
        if(elem.newTask) return <NewTask key={idx} task={elem} />
      })}
    </div>
  );
};

export default TaskList;
