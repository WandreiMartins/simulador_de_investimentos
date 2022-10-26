import React from 'react'

const Mes = ({meses}) => {
  return (
    <>        
        {meses.map((mes) => (
        <div key={mes}>{mes}</div>
    ))}
    </>
  )
}

export default Mes