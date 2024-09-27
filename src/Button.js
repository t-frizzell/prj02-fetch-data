import React from 'react'

const Button = ({buttonText, reqType, setReqType}) => {
  return (
    <button
        className={buttonText == reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
    >
        {/* Set the text for the button */}
        {buttonText}
    </button>
  )
}

export default Button