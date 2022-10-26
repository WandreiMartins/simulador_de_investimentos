import React from 'react'

const Juros = ({meses, im, ii, juros}) => {
    let arrayjuros = []
    let Auxiliar01 = 0
    let Auxiliar02 = []
    let Auxiliar03 = 0
    let arrayjuroscom = []
    Auxiliar03 = im
    meses.forEach(() => {
        //usar if pra ii
        Auxiliar03 = Auxiliar03+Auxiliar03*juros
        Auxiliar01 = Auxiliar03 + Auxiliar01
        arrayjuros.push(Number(Auxiliar01.toFixed(2)))
    })
  
   arrayjuroscom =  [0, ...arrayjuros]
  
   for(let i = 0; i < arrayjuros.length; i++){
        if(meses[i] === 1){
            Auxiliar02.push(arrayjuros[i]-im)
        }else{
            Auxiliar02.push(Number((arrayjuros[i]-arrayjuroscom[i]-im).toFixed(2)))
        }
    }

return (
    <>        
        {Auxiliar02.map((Auxiliar02) => (
        <div key={Auxiliar02}>{Auxiliar02}</div>
    ))}
    </>
  )
}

export default Juros