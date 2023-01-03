import React from 'react'

const BoxesRes = ({text, resultado}) => {
  return (
    <div className='blueBox'> 
      <p>{text}</p>
         <div className='blueBoxSon'>
            <span>R$</span><div>{resultado}</div>
          </div>  
    </div>
  )
}

export default BoxesRes