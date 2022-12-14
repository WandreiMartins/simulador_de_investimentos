import React from 'react'

const Saldomjuros = ({meses, im, ii, juros}) => {
  let arraysmj = []
  let arraysmjString = []
  let Auxiliar01 = 0
  let Auxiliar02 = 0
  let Auxiliar03 = 0


    meses.map((mes) => {
      
      if(ii === ''){
        arraysmj.push('')

    }else if(mes === 1 && ii !=''){
        Auxiliar03 = ii*juros 
        Auxiliar01 = ii*juros+im+ii 
        Auxiliar02 = Auxiliar03 + ii 
        arraysmj.push(Number(Auxiliar02.toFixed(2)))
    }else if (mes === 2){
                       
      Auxiliar03 = Auxiliar01*juros
      Auxiliar02 = Auxiliar01+Auxiliar03
      Auxiliar01 = ((Auxiliar01-im+Auxiliar03)+im*mes)

      arraysmj.push(Number(Auxiliar02.toFixed(2)))
  }else{
      Auxiliar03 = Auxiliar01*juros
      Auxiliar02 = Auxiliar01+Auxiliar03
      Auxiliar01 = ((Auxiliar01-((im*mes)-(im))+Auxiliar03)+im*mes)

      arraysmj.push(Number(Auxiliar02.toFixed(2)))
  }
})

arraysmj.forEach((smj)=>{
  smj = smj.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
  arraysmjString.push(smj)
 })

  return (
    <>    
        {arraysmjString.map((smj) => (
        <div key={smj}>{smj}</div>
     ))}
    </>
  )
}

export default Saldomjuros
