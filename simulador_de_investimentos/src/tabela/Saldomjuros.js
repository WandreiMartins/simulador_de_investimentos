import React from 'react'

const Saldomjuros = ({meses, im, ii, juros}) => {
let arraySaldomjuros = []
let Auxiliar01 = 0
meses = meses.slice(0, 11)

    meses.map((mes) => {
      //usar if pra ii
      if(mes===1){
        arraySaldomjuros.push(Number(ii))
      }
        im = im+im*juros
        Auxiliar01 = im + Auxiliar01+ii
        arraySaldomjuros.push(Number(Auxiliar01))
        return arraySaldomjuros
    })

  return (
    <>    
        {arraySaldomjuros.map((arraySJ) => (
        <div key={arraySJ}>{arraySJ.toFixed(2)}</div>
     ))}
    </>
  )
}

export default Saldomjuros
