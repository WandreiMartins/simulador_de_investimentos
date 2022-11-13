import React, { useState } from 'react'

const Inputs = ({id, form, setForm, value}) => {
  const [valorinf, setValorinf] = useState('')
    function handleChange ({target}){
        const {id, value} = target
        let result
        let value4
        // let value1 = value.replace(/,/g,".")
        let value1 = value.replace(/[^0-9]+/g,'')
        let value3 = value1.split('')
       
      if(value3.length>2){

       value3.splice(value3.length-2, 0, ',')
       value4 = value3.join('-')
       result =  value4.replace(/-/g,"")

       if(value3.length>6){

        value3.splice(value3.length-6, 0, '.')
        value4 = value3.join('-')
        result =  value4.replace(/-/g,"")
        
        if(value3.length>10){

          value3.splice(value3.length-10, 0, '.')
          value4 = value3.join('-')
          result =  value4.replace(/-/g,"")

          if(value3.length>14){

            value3.splice(value3.length-14, 0, '.')
            value4 = value3.join('-')
            result =  value4.replace(/-/g,"")
     
           }
   
         }

       }
      }else{
        result = value1
      }
      console.log(form)    
        
        setForm({ ...form, [id]:result})
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