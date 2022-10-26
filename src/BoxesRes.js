import React from 'react'

const BoxesRes = ({text}) => {
  return (
    <div className='blueBox'> 
      <p>{text}</p>
         <div className='blueBoxSon'>
            <span>R$</span><div>00000,00</div>
          </div>  
    </div>
  )
}

export default BoxesRes