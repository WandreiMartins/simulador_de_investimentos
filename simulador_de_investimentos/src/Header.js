import React from 'react'
import relatorio from './img/relatorio.png'
import dinheiro1 from './img/dinheiro1.png'
import dinheiro3 from './img/dinheiro3.png'
import barras from './img/barras.png'
import Boxes from './Boxes'

const Header = ({form, setForm, aparecer}) => {
 
  function handleForm(event){
    event.preventDefault()
  }

  return (
    <header>
      <form onSubmit={handleForm} action="">
          <div className='center'>
              <Boxes  form={form} setForm={setForm} img={dinheiro3} value={form.II} text01='Investimento inicial' id='II' pre='R$'/>
              <Boxes  form={form} setForm={setForm} img={dinheiro1} value={form.IM} text01='Investimento Mensal' id='IM' pre='R$'/>
              <Boxes  form={form} setForm={setForm} img={barras} value={form.prazo} text01='Prazo (meses)' id='prazo' pre=''/>            
              <Boxes  form={form} setForm={setForm} img={relatorio} value={form.RM}text01='Rentabilidade Mensal' id='RM' />
          </div>
        </form>
    </header>
  )
}

export default Header