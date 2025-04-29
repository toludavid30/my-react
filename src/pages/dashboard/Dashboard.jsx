import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import DashboardIndex from './DashboardIndex'

const Dashboard = ({children}) => {
  return (
    <div>
        <nav>Dashboard nav</nav>
        <Routes>
            <Route path='/' element ={<DashboardIndex/>}/>
            <Route path='/orders' element ={<Orders/>}/>
            <Route path='*' element ={<Dashboard404/>}/>
        </Routes>
    </div>
  )
}

const Dashboard404 = () => {
    return (
        <div>Dashboard 404</div>
    )
}

export default Dashboard