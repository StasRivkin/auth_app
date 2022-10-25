import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Guest from '../components/Guest'
import Profile from '../components/Profile'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Guest />} />
            <Route path={'home/:profile' || 'home/profile'} element={<Profile />}/>
        </Routes>
    )
}

export default Routers