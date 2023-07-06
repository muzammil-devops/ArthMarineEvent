import React, { useEffect, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'

import './style.css'

const FoodPreferenceModal = (props) => {
  const [isVeg, setIsVeg] = useState(false)
  const [isNonVeg, setIsNonVeg] = useState(false)

  useEffect(() => {
    if (props?.data?.dinner === `veg`) {
      setIsVeg(true)
      setIsNonVeg(false)
    } else if (props?.data?.dinner === `non-veg`) {
      setIsVeg(false)
      setIsNonVeg(true)
    } else {
      setIsVeg(false)
      setIsNonVeg(false)
    }
  }, [props.data])

  return (
    <div>
      <Modal
        isOpen={props.isShowFoodPreference}
        toggle={() => {
          props.onSubmitPreference({
            isVeg: isVeg,
            isNonVeg: isNonVeg,
          })
          props.setIsShowFoodPreference(!props.isShowFoodPreference)
        }}
        centered
        className="popup-size"
        size="md"
      >
        <div
          className="close-btn"
          onClick={() => {
            props.onSubmitPreference({
              isVeg: isVeg,
              isNonVeg: isNonVeg,
            })
            props.setIsShowFoodPreference(false)
          }}
          aria-label="Close"
        >
          <span>x</span>
        </div>
        <ModalBody>
          <h5 className="modal-head">Select your food preference</h5>
          {/* <button onClick={() => console.log(isVeg, isNonVeg)}>
            get state
          </button> */}

          <div className="control-form-food-preference">
            <div className="control-form-checkbox">
              <input
                id="veg"
                name="veg"
                type="checkbox"
                checked={isVeg}
                onChange={(e) => {
                  setIsVeg(e.target.checked)
                  setIsNonVeg(false)

                  props.onSubmitPreference({
                    isVeg: e.target.checked,
                    isNonVeg: false,
                  })
                  props.setIsShowFoodPreference(!props.isShowFoodPreference)
                }}
              />
              <label className="modal-lbl" htmlFor="veg">
                <span className="a-dot veg"></span>Veg
              </label>
            </div>

            <div className="control-form-checkbox">
              <input
                id="non-veg"
                name="non-veg"
                type="checkbox"
                checked={isNonVeg}
                onChange={(e) => {
                  setIsNonVeg(e.target.checked)
                  setIsVeg(false)

                  props.onSubmitPreference({
                    isVeg: false,
                    isNonVeg: e.target.checked,
                  })
                  props.setIsShowFoodPreference(!props.isShowFoodPreference)
                }}
              />
              <label className="modal-lbl" htmlFor="non-veg">
                <span className="a-dot non-veg"></span>
                Non-Veg
                <span className="extra-caption">(Chicken & sea Fish)</span>
              </label>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default FoodPreferenceModal
