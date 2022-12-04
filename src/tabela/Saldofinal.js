import React from 'react'

const Saldofinal = ({meses, im, ii, juros, boxesres, setBoxesres, liberar}) => {
  
  let arraysf = []
  let arraysfString = []
  let Auxiliar01 = 0
  let Auxiliar02 = 0
  let Auxiliar03 = 0

    meses.map((mes) => {
      
      if(ii === ''){
        arraysf.push('')

    }else if(mes === 1 && ii !==''){
        Auxiliar03 = ii*juros 
        Auxiliar01 = ii*juros+im+ii 
        Auxiliar02 = Auxiliar03 + ii +im
        arraysf.push(Number(Auxiliar02.toFixed(2)))
    }else if (mes === 2){
                       
      Auxiliar03 = Auxiliar01*juros
      Auxiliar02 = Auxiliar01+Auxiliar03 + im
      Auxiliar01 = ((Auxiliar01-im+Auxiliar03)+im*mes)

      arraysf.push(Number(Auxiliar02.toFixed(2)))
  }else{
      Auxiliar03 = Auxiliar01*juros
      Auxiliar02 = Auxiliar01+Auxiliar03 +im
      Auxiliar01 = ((Auxiliar01-((im*mes)-(im))+Auxiliar03)+im*mes)

      arraysf.push(Number(Auxiliar02.toFixed(2)))
  }
})

arraysf.forEach((sf)=>{
  sf = sf.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
  arraysfString.push(sf)
 })
 
// arraysfString.splice(0, arraysfString.length-1)
React.useEffect(()=>{

  if(liberar){
    setBoxesres({...boxesres, total:arraysfString.pop()})
  }
}, [liberar])
console.log(boxesres)




  return (
    <>        
        {arraysfString.map((sf) => (
        <div key={sf}>{sf}</div>
    ))}
    </>
  )
}

export default Saldofinal