import React from 'react'

const Saldoinicial = ({meses, im, ii, juros}) => {
  let arrayii = []
  let arrayiistring=[]
  let Auxiliar01 = 0
  let Auxiliar03 = 0
  let iistring = 0
  
  meses.forEach(mes => {
    if(mes === 1){
      Auxiliar01 = ii
      Auxiliar03 = ii*juros
      arrayii.push(Auxiliar01)
    }else{
      
      Auxiliar01 = ((Auxiliar01-((im*mes)-(im))+Auxiliar03)+im*mes)
      Auxiliar03 = Auxiliar01*juros
      arrayii.push(Auxiliar01)
    }
  });


arrayii.forEach((ii)=>{
 iistring = ii.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
  arrayiistring.push(iistring)
})

  return (
    <>        
        {arrayiistring.map((ii) => (
        <div key={ii}>{ii}</div>
    ))}
    </>
  )
}

export default Saldoinicial