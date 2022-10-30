import React from 'react'

const Investimentomesal = ({meses, im}) => {
    im = im.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
  return (
    <>    
     {meses.map((mes) => (
        <div key={mes}>{im}</div>
    ))}
    </>
  )
}

export default Investimentomesal