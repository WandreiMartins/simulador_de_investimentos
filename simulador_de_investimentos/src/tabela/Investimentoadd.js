import React from 'react'

const Investimentoadd = ({meses}) => {
  return (
    <>        
        {meses.map((mes) => (
        <div key={mes}>{mes}</div>
    ))}
    </>
  )
}

export default Investimentoadd