import React, { useEffect, useRef } from 'react'

function FocusInput() {
  const inputref = useRef(null)

  useEffect(() => {
    //focus the input element
    inputref.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={inputref} />
    </div>
  )
}

export default FocusInput
