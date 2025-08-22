import React from 'react'
import Header from '../others/Header'
import TaskCards from '../others/TaskCards'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({changeUser, data}) => {
  return (
    <div className='bg-[#1C1C1C] p-10 h-screen'>
        <Header changeUser={changeUser} data={data}/>
        <TaskCards data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
