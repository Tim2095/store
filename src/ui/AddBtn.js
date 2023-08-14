import React from 'react'

const AddBtn = ({text, onClick, btnClass}) => {
  return (
    <button className={btnClass} onClick={onClick}>{text}</button>
  )
}

export default AddBtn