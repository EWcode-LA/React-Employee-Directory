import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import { SortTable } from './components/SortTable'

function App () {
  return (
    <div className="App">
      <BasicTable />
      <SortTable />
    </div>
  )
}

export default App 