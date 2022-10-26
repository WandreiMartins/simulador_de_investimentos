import React from 'react'

const Saldoinicial = ({meses}) => {
  return (
    <>        
        {meses.map((mes) => (
        <div key={mes}>{mes}</div>
    ))}
    </>
  )
}

export default Saldoinicial