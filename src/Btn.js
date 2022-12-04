import React from 'react'

const Btn = ({text, id, liberar, setLiberar, form, setForm, setAparecer, aparecer, setBoxesres}) => {

    function handleClick(event){
      if(event.target.id === 'calcular' && form.II!=='' && form.IM !=='' && form.prazo!=='' && form.RM!==''){
        setLiberar(true)
       }
      if(event.target.id === 'calcular'  && (form.II ==='' || form.IM ==='' || form.prazo ==='' || form.RM ==='')){
        if(form.II ===''){
            setAparecer({...aparecer, ap:true})
        }else if(form.II !==''){
            setAparecer({...aparecer, ap:false})
        }
        if(form.II ==='' && form.IM ===''){
            setAparecer({...aparecer, ap:true, ap2:true})
        }
       }
       


      if(event.target.id === 'reiniciar'){
        setForm({
                II:'',
                IM:'',
                prazo:'',
                RM:''
              })
        setLiberar(false) 
        setBoxesres({
                     Investimento:'',
                     JurosRecebido:'',
                     total:'',
        })

           
    }
}



  return (
      <button onClick={handleClick} className='btn' id={id}>{text}</button>
  )
}

export default Btn