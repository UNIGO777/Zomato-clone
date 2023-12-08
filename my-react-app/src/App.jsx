/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ZomatoHome from './Zomatohome'
import Log_in from './Login'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'
import ViewFood from './ViewFood.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element= { <ZomatoHome/> }/>
        <Route path='/Login' element={<Log_in />} />
        <Route path='/ViewFood' element={<ViewFood />} />
        
        <Route path='*' element= { <NotFound/> }/>
      </Routes>

    </div>
  )
}

export default App
