import React from 'react'

const Investimentomesal = ({meses, im, ii}) => {
    
    function InvestimentoMensal(mes){  
        if(mes === 1){
            return ii.toFixed(2)
        }else{
            return im.toFixed(2)
        } 
        
    }
  return (
    <>    
     {meses.map((mes) => (
        <div key={mes}>{InvestimentoMensal(mes)}</div>
    ))}
    </>
  )
}

export default Investimentomesal