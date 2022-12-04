import React, { useState } from 'react'

const Inputs = ({id, form, setForm, value, maxlength}) => {
 
    function handleChange ({target}){
        const {id, value} = target
        let result
        let value4
        let value1 = value.replace(/[^0-9]+/g,'')           
        
        value4 = new Intl.NumberFormat('pt-BR',{
          style:'decimal'
        }).format(value1)
        
        result = value4
        
        
      
        
        setForm({ ...form, [id]:result})
    }

   
  return (
    <>
        <input 
        id={id}
        type='text'
        value={value}
        onChange={handleChange}
        maxLength={maxlength}
        />
        
    </>
  )
}

export default Inputs