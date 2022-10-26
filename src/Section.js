import React from 'react'
import BoxesRes from './BoxesRes'
import Btn from './Btn'

const Section = ({form, setForm, liberar, setLiberar, setAparecer, aparecer}) => {
 
  return (
    <section>
      <div className='center'>
          <BoxesRes text='Investimento'/>
          <BoxesRes text='Juros recebidos'/>
          <BoxesRes text='Total'/>         
      </div>
      <div className='btns'>
          <Btn aparecer={aparecer} setAparecer={setAparecer} form={form} liberar={liberar} setLiberar={setLiberar} text='Calcular' id='calcular' />
          {liberar ?  <Btn setForm={setForm}form={form} liberar={liberar} setLiberar={setLiberar} text='Reiniciar' id='reiniciar'/> : null }
         
      </div>
      
    </section>
  )
}

export default Section