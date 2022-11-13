import React from 'react'
import Mes from './tabela/Mes'
import Saldomjuros from './tabela/Saldomjuros'
import Investimentomensal from './tabela/Investimentomesal'
import Juros from './tabela/Juros'
import Saldofinal from './tabela/Saldofinal'
import Saldoinicial from './tabela/Saldoinicial'
import Investimentoadd from './tabela/Investimentoadd'

const TabText = ({form, liberar}) => {

  // form.RM.string.replace(/,?/g,". ")
// console.log(form.RM.replace(/,/g,"."))
// console.log(form.RM.replace(/[^0-9,]+/g,''))

let meses = []
let ii = Number(form.II)
let im = Number(form.IM)
let juros = Number(form.RM/100)

  for (let i = 1; i < Number(form.prazo)+1; i++) {
      meses.push(i)
  }
 return (
        <div className='tabela-header'>
            <div>
              <div>Mês</div>
              {liberar ? <Mes meses={meses}/>: null }              
            </div>

            <div>
              <div>Saldo inicial</div>              
              {liberar ? <Saldoinicial meses={meses} im={im} ii={ii} juros={juros}/>: null }               
            </div>

            <div>
              <div>Juros</div>
              {liberar ? <Juros meses={meses} im={im} ii={ii} juros={juros}/>: null }               
            </div>

            <div>
              <div>Saldo + Juros</div>
              {liberar ? <Saldomjuros meses={meses} im={im} ii={ii} juros={juros}/>: null }                           
            </div>

            <div>
              <div>Investimento mensal</div>
              {liberar ? <Investimentomensal meses={meses} im={im} ii={ii}/> : null }                            
            </div>

            {/* <div>
              <div>Investimento adicional</div>
              {liberar ? <Investimentoadd meses={meses}/>   : null }                      
            </div> */}

            <div>
              <div>Saldo final</div>
              {liberar ? <Saldofinal meses={meses} im={im} ii={ii} juros={juros}/>   : null }                          
            </div>

        </div>
  )
}

export default TabText