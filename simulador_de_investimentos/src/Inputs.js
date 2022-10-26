import React from 'react'

const Inputs = ({id, form, setForm, value}) => {
    function handleChange ({target}){
        const {id, value} = target
        setForm({ ...form, [id]:value})
    }
  return (
    <>
        <input 
        id={id}
        type='text'
        value={value}
        onChange={handleChange}
        />
        
    </>
  )
}

export default Inputs