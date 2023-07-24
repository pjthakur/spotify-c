import React from 'react'
import { Outlet, Route, Routes, Switch } from 'react-router-dom'
import CurrentSong from '../components/CurrentSong'

const Current = () => {
  return (
    <div className='current'>
      <h1>currteb</h1>
      <Outlet/>
    </div>
  )
}

export default Current