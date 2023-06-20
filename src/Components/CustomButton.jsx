import React from 'react'

const CustomButton = ({type,title,CustomStyles,hanleClick}) => {
  const generateStyle = (type) => {
    if(type === 'filled'){
      return {
        
      }
    }
  }

  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${CustomStyles}`} style={generateStyle(type)}>
      {title}
    </button>
  )
}

export default CustomButton