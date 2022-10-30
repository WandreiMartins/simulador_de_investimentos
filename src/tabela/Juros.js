import React from 'react'

const Juros = ({meses, im, ii, juros}) => {
    let arrayjuros = []
    let arrayjurosString = []
    let Auxiliar01 = 0
    let Auxiliar03 = 0
    
    meses.forEach((mes) => {
        if(ii === ''){
            arrayjuros.push('')

        }else if(mes === 1 && ii !=''){
            Auxiliar03 = ii*juros
            Auxiliar01 = ii*juros+im+ii
            arrayjuros.push(Number(Auxiliar03.toFixed(2)))
        }else if (mes === 2){
                       
            Auxiliar03 = Auxiliar01*juros
            Auxiliar01 = ((Auxiliar01-im+Auxiliar03)+im*mes)

            arrayjuros.push(Number(Auxiliar03.toFixed(2)))
        }else{
            Auxiliar03 = Auxiliar01*juros
            Auxiliar01 = ((Auxiliar01-((im*mes)-(im))+Auxiliar03)+im*mes)

            arrayjuros.push(Number(Auxiliar03.toFixed(2)))
        }
    
    })

    arrayjuros.forEach((juros)=>{
        juros = juros.toLocaleString('pt-BR', { style: 'currency', currency: 'brl' })
        arrayjurosString.push(juros)
       })

return (
    <>        
        {arrayjurosString.map((juros) => (
        <div key={juros}>{juros}</div>
    ))}
    </>
  )
}

export default Juros