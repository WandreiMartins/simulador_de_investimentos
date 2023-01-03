import React from 'react'
import BoxesRes from './BoxesRes'
import Btn from './Btn'

const Section = ({form, setForm, liberar, setLiberar, setAparecer, aparecer, setBoxesres, boxesres}) => {
 const {Investimento,  JurosRecebido, total} = boxesres
  return (
    <section>
      <div className='center'>
          <BoxesRes text='Investimento' resultado={Investimento}/>
          <BoxesRes text='Juros recebidos' resultado={JurosRecebido}/>
          <BoxesRes text='Total'resultado={total}/>         
      </div>
      <div className='btns'>
          { !liberar ? <Btn 
          aparecer={aparecer} 
          setAparecer={setAparecer} 
          form={form} liberar={liberar} 
          setLiberar={setLiberar} 
          text='Calcular' 
          id='calcular'
          setBoxesres = {setBoxesres}
          /> : null}
          {liberar ?  <Btn setForm={setForm}form={form} liberar={liberar} setLiberar={setLiberar} text='Reiniciar' id='reiniciar' setBoxesres = {setBoxesres}/> : null }
         
      </div>
      
    </section>
  )
}

export default Section