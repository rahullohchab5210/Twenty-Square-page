import React from 'react'

function Button(props) {
  return (
      <button className={`rounded-[82px] bg-[#ED1C25] text-nowrap cursor-pointer text-[#FFFFFF] font-semibold leading-[118%] tracking-[0%] ${props.className}`}>
          {props.text}
      </button>
  )
}

export default Button