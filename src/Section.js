import React from 'react'
import BoxesRes from './BoxesRes'
import Btn from './Btn'

const Section = ({form, setForm, liberar, setLiberar, setAparecer, aparecer, setBoxesres}) => {
 
  return (
    <section>
      <div className='center'>
          <BoxesRes text='Investimento'/>
          <BoxesRes text='Juros recebidos'/>
          <BoxesRes text='Total'/>         
      </div>
      <div className='btns'>
          <Btn 
          aparecer={aparecer} 
          setAparecer={setAparecer} 
          form={form} liberar={liberar} 
          setLiberar={setLiberar} 
          text='Calcular' 
          id='calcular'
          setBoxesres = {setBoxesres}
          />
          {liberar ?  <Btn setForm={setForm}form={form} liberar={liberar} setLiberar={setLiberar} text='Reiniciar' id='reiniciar' setBoxesres = {setBoxesres}/> : null }
         
      </div>
      
    </section>
  )
}

export default Section