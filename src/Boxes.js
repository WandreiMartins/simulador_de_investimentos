import React from 'react'
import Inputs from './Inputs'

const Boxes = ({img, text01, id, pre, form, setForm, value, maxlength, ap, ap2, ap3, ap4}) => {

  function clickResul (){
    console.log('ok')
  }
  return (
    <div className='box'>
        <div className='img'> 
            <img src= {img} alt={img} />
        </div>
        <div className='text-input'>
            <label htmlFor={id}>{text01}</label>           
            <div className='input'>
              <span>{pre}</span> 
              <Inputs form={form} setForm={setForm} id={id} value={value} maxlength={maxlength}/> 
            </div>
            {ap ? <p className='pcampo'>Preencha este campo!</p>:null }
            {ap2 ? <p className='pcampo'>Preencha este campo!</p>:null }
            {ap3 ? <p className='pcampo'>Preencha este campo!</p>:null }
            {ap4 ? <p className='pcampo'>Preencha este campo!</p>:null }
             
            
        </div >
       
    </div>
  )
}

export default Boxes