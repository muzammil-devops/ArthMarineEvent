import React, { useState } from 'react'
import './style.css'

import FormLogo from './../../../assets/images/form-logo.png'
import CapSideImage from './../../../assets/images/event-cap.png'
import FrontCapImage from './../../../assets/images/event-cap-front.png'
import FoodPreferenceModal from '../Modal'

import { BsFillPencilFill } from 'react-icons/bs'

const Form = (props) => {
  const [state, setState] = useState({
    name: ``,
    companyName: ``,
    email: ``,
    mobileNumber: `+65`,
    nameOnCap: '',

    isPresentation: false,
    isCocktail: false,
    dinner: '',
    isDinner: false,
    isAll: false,
  })

  const [isValidationShow, setIsValidationShow] = useState(false)
  const [isShowFoodPreference, setIsShowFoodPreference] = useState(false)

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  /* ---------------------------- INPUT CHANGE HANDLER ---------------------------- */
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    let updatedState = null

    switch (name) {
      case 'name':
        updatedState = { ...state, name: value }
        setState(updatedState)
        break

      case 'email':
        updatedState = { ...state, email: value }
        setState(updatedState)
        break

      case 'nameOnCap':
        console.log(state?.nameOnCap?.length)
        updatedState = {
          ...state,
          nameOnCap: value,
        }
        setState(updatedState)
        break

      case 'companyName':
        updatedState = { ...state, companyName: value }
        setState(updatedState)
        break

      case 'mobileNumber':
        if (!isNaN(value) && value?.length > 2) {
          updatedState = { ...state, mobileNumber: value }
          setState(updatedState)
        }

        break

      case 'isPresentation':
        updatedState = { ...state, isPresentation: e.target.checked }
        setState(updatedState)
        break

      case 'isCocktail':
        updatedState = { ...state, isCocktail: e.target.checked }
        setState(updatedState)
        break

      case 'isDinner':
        if (e.target.checked) {
          setIsShowFoodPreference(true)
        } else {
          updatedState = { ...state, isDinner: false, dinner: '' }
          setState(updatedState)
        }
        break

      case 'isAll':
        if (e.target.checked && !state?.isDinner) {
          setIsShowFoodPreference(true)
        }
        updatedState = {
          ...state,
          isPresentation: e.target.checked,
          isCocktail: e.target.checked,
          isDinner: e.target.checked,
          isAll: e.target.checked,
          dinner: e.target.checked
            ? state?.dinner === ''
              ? ''
              : state?.dinner
            : '',
        }
        setState(updatedState)
        break

      default:
      // do nothing
    }
  }

  const onSubmitHandler = () => {
    console.log('sss', state)
    if (
      state?.name !== `` &&
      state?.email !== `` &&
      state?.nameOnCap !== `` &&
      state?.companyName !== `` &&
      state?.mobileNumber?.length > 3 &&
      validateEmail(state?.email) &&
      (state?.isPresentation === true ||
        state?.isCocktail === true ||
        state?.isDinner === true ||
        state?.isAll === true)
    ) {
      console.log('inside if')
      const payload = {
        ...state,
        name: state?.name,
        companyName: state?.companyName,
        email: state?.email,
        nameOnCap: state?.nameOnCap,
        isPresentation: state?.isPresentation,
        isCocktail: state?.isCocktail,
        dinner: state?.dinner,
      }
      setIsValidationShow(false)
      props.onSubmit({ ...payload })
    } else {
      console.log('inside else')
      setIsValidationShow(true)
    }
  }

  const preferenceSubmitHandler = (preferenceData) => {
    console.log('preferenceData', preferenceData)
    if (preferenceData?.isVeg) {
      setState({ ...state, isDinner: true, dinner: 'veg' })
    } else if (preferenceData?.isNonVeg) {
      setState({ ...state, isDinner: true, dinner: 'non-veg' })
    } else {
      setState({ ...state, isDinner: false, isAll: false, dinner: '' })
    }
  }

  return (
    <>
      {isShowFoodPreference && (
        <FoodPreferenceModal
          data={{ ...state }}
          onSubmitPreference={preferenceSubmitHandler}
          isShowFoodPreference={isShowFoodPreference}
          setIsShowFoodPreference={setIsShowFoodPreference}
        />
      )}

      <section className="section-form">
        {/* <button onClick={() => console.log(state)}>get state</button> */}

        <div className="section-registration">
          <div className="form-heading">
            <div className="form-logo-container">
              <img src={FormLogo} alt="form-logo" />
            </div>
            <span className="heading">Register Now</span>
          </div>

          <div className="form-registration">
            <div className="form-col-1">
              <div className="control-form">
                <label className="control-lbl">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={state?.name}
                  onChange={inputChangeHandler}
                  autoComplete="off"
                />
                {isValidationShow && state?.name === `` && (
                  <span className="error">Please enter name</span>
                )}
              </div>

              <div className="control-form">
                <label className="control-lbl">Email Id</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-input"
                  placeholder="Enter your email id"
                  value={state?.email}
                  onChange={inputChangeHandler}
                  autoComplete="off"
                />

                {isValidationShow && !validateEmail(state?.email) && (
                  <span className="error">Please enter valid email</span>
                )}
              </div>

              <div className="control-form">
                <span className="general-info">
                  Thank you for the registration, as a goodwill gesture we would
                  like to present you with a personalized Captain’s cap cap with
                  your name embroidered on cap.
                </span>
              </div>

              <div className="control-form">
                <label className="control-lbl">
                  Name on the Cap{' '}
                  <span className="sec-label">(in max. 10 characters)</span>
                </label>
                <input
                  id="nameOnCap"
                  name="nameOnCap"
                  type="text"
                  className="form-input"
                  // placeholder="Enter the name you want to be printed on cap"
                  value={state?.nameOnCap}
                  onChange={inputChangeHandler}
                  autoComplete="off"
                  maxLength="10"
                />
                <span className="count-remaining">
                  {`${state?.nameOnCap?.length}`}/10
                </span>
                {isValidationShow && state?.nameOnCap === `` && (
                  <span className="error">Please enter name</span>
                )}
              </div>

              <div className="control-form">
                <label className="control-lbl">Attend</label>
                <div className="control-form-checkbox">
                  <input
                    id="isPresentation"
                    name="isPresentation"
                    type="checkbox"
                    checked={state?.isPresentation}
                    onChange={inputChangeHandler}
                  />
                  <label htmlFor="isPresentation">Seminar [15:00- 18:15]</label>
                </div>

                <div className="control-form-checkbox">
                  <input
                    id="isCocktail"
                    name="isCocktail"
                    type="checkbox"
                    checked={state?.isCocktail}
                    onChange={inputChangeHandler}
                  />
                  <label htmlFor="isCocktail">Cocktail [15:00- 18:15]</label>
                </div>

                <div className="control-form-checkbox">
                  <input
                    id="isDinner"
                    name="isDinner"
                    type="checkbox"
                    checked={state?.isDinner}
                    onChange={inputChangeHandler}
                  />
                  <label htmlFor="isDinner">Dinner [15:00- 18:15]</label>
                  {state?.isDinner && state?.dinner !== '' && (
                    <>
                      {state?.dinner === `veg` && (
                        <span className="selected-food-preference-veg">
                          Veg
                        </span>
                      )}

                      {state?.dinner === `non-veg` && (
                        <span className="selected-food-preference-non-veg">
                          Non-veg
                        </span>
                      )}

                      <span
                        className="edit-food-preference"
                        onClick={() => setIsShowFoodPreference(true)}
                      >
                        <BsFillPencilFill />
                      </span>
                    </>
                  )}
                </div>

                <div className="control-form-checkbox">
                  <input
                    id="isAll"
                    name="isAll"
                    type="checkbox"
                    checked={state?.isAll}
                    onChange={inputChangeHandler}
                  />
                  <label htmlFor="isAll">Attending all of the above</label>
                </div>

                {isValidationShow &&
                  state?.isPresentation === false &&
                  state?.isCocktail === false &&
                  state?.isDinner === false &&
                  state?.isAll === false && (
                    <span className="error">Please select food preference</span>
                  )}
              </div>
            </div>

            <div className="form-col-1">
              <div className="control-form">
                <label className="control-lbl">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="form-input"
                  placeholder="Enter the company's name"
                  value={state?.companyName}
                  onChange={inputChangeHandler}
                  autoComplete="off"
                />
                {isValidationShow && state?.companyName === `` && (
                  <span className="error">Please enter company name</span>
                )}
              </div>

              <div className="control-form">
                <label className="control-lbl">Mobile Number</label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="text"
                  className="form-input"
                  placeholder="Enter the mobile number with country code"
                  value={`${state?.mobileNumber}`}
                  onChange={inputChangeHandler}
                  autoComplete="off"
                />
                {isValidationShow && state?.mobileNumber?.length == 3 && (
                  <span className="error">
                    Please enter valid mobile number
                  </span>
                )}
              </div>

              <div className="control-form">
                <div className="cap-container">
                  <div className="cap-1">
                    <img src={FrontCapImage} alt="cap-side" />
                  </div>

                  <div className="cap-2">
                    <img src={CapSideImage} alt="cap-front" />
                    <span className="cap-holder-name">{state?.nameOnCap}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrapper-submit">
            <button className="button" onClick={onSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form
