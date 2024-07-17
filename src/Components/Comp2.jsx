import React from 'react'

const Comp2 = ({title , discription , button , Freepik , display , fontSize1 , fontSize2}) => {
  return (
    <div className='textCard d-flex justify-content-center flex-column'>
      <h4 style={{fontSize: fontSize1  }} >{title}</h4>
      <p className='discription' style={{fontSize: fontSize2 }}>{discription} <a className='textdecor' href='#'>{Freepik}</a></p>
      <button className='btn1' style={{display: display}} >{button} </button>
    </div>
  )
}

export default Comp2
