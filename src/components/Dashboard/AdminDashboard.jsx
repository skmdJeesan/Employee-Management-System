import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({changeUser}) => {
  return (
    <div className="min-h-screen w-full p-10 bg-[#222]">
      <Header changeUser={changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
