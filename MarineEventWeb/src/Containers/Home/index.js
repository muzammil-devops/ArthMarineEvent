import React, { useState } from 'react'

import axios from 'axios'
import ToastUtils from '../../Components/Toast'

import Main from './Main/index'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Registration from '../Registration'
import RegistrationSuccess from '../Registration/Success'
import Loader from '../../Components/Loader'

const Home = () => {
  const [isHomePageShow, setIsHomePageShow] = useState(true)
  const [isRegFormShow, setIsRegFormShow] = useState(false)
  const [isRegFormSubmitSuccess, setIsRegFormSubmitSuccess] = useState(false)

  const [isLoader, setIsLoader] = useState(false)

  const showRegistrationFormHandler = () => {
    setIsHomePageShow(false)
    setIsRegFormShow(true)
    setIsRegFormSubmitSuccess(false)
  }

  const submitRegFormHandler = async (data) => {
    setIsLoader(true)

    console.log('submithhh',data)

    axios
      .post('http://18.143.169.22:8080/event/register', {
        ...data,
      })
      .then(function (response) {
        ToastUtils.showSuccessToast(`Registration successful!`)
        setIsLoader(false)

        setIsHomePageShow(false)
        setIsRegFormShow(false)
        setIsRegFormSubmitSuccess(true)
      })
      .catch(function (error) {
        setIsLoader(false)
        ToastUtils.showErrorToast(`${error?.response?.data?.message}`)
      })
  }

  return (
    <>
      <Header />
      {/* <button onClick={() => ToastUtils.showSuccessToast('hello success')}>
        toast
      </button> */}

      {isLoader && <Loader />}

      {isHomePageShow && <Main onRegistration={showRegistrationFormHandler} />}
      {isRegFormShow && <Registration onSubmit={submitRegFormHandler} />}
      {isRegFormSubmitSuccess && <RegistrationSuccess />}
      <Footer />
    </>
  )
}

export default Home
