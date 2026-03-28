import React from 'react'

function Button(props) {
  return (
      <button className={`py-3.5 px-6 rounded-[82px] bg-[#ED1C25] text-nowrap cursor-pointer text-[#FFFFFF] font-semibold leading-[118%] tracking-[0%] ${props.className}`}>
          {props.text}
      </button>
  )
}

export default Button