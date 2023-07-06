import React, { useEffect } from 'react'

import Home from './Containers/Home'

import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    console.log = function no_console() {}
  }, [])

  return (
    <>
      <ToastContainer limit={3} autoClose={4000} />
      <Home />
    </>
  )
}

export default App
