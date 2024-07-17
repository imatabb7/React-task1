import React, { useState } from 'react'


const Comp1 = ({title , image , color , margin1 , margin2 }) => {
  return (
    <div className='cardImage d-flex flex-column justify-content-end ' style={{backgroundColor : color}}>
      <h3 className='lato-bold' style={{margin : margin2}} >{title}</h3>
      <img src={image} alt="image1" className='img ' style={{margin : margin1 }} />
    </div>
  )
}
export default Comp1




