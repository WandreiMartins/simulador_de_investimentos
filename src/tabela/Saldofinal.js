import React from 'react'

const Saldofinal = ({meses, im, ii, juros}) => {
let array = []
let Auxiliar01 = 0

    meses.forEach(() => {
      //usar if pra ii
        im = im+im*juros
        Auxiliar01 = im + Auxiliar01
        array.push(Number(Auxiliar01))
        return array
    })

  return (
    <>    
        {array.map((array) => (
        <div key={array}>{array.toFixed(2)}</div>
     ))}
    </>
  )
}

export default Saldofinal