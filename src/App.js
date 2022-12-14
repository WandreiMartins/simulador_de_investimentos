import React from 'react'
import Header from './Header'
import './App.css';
import Section from './Section';
import Section2 from './Section2';

function App() {
  
  const [aparecer, setAparecer] = React.useState({
    ap:false,
    ap2:false,
    ap3:false,
    ap4:false
  })
  const [liberar, setLiberar] = React.useState(false)
  const [form, setForm] = React.useState({
    II:'1000',
    IM:'1000',
    prazo:'24',
    RM:'1'
  })
  const [boxesres, setBoxesres]  = React.useState({
    Investimento:'',
    JurosRecebido:'',
    total:''
  })
  
// console.log(boxesres)
const [arrayFinal, setArrayFinal]  = React.useState({
  arrayJuros:'',
  arraySaldoFinal:'',
  
}) 
console.log(arrayFinal)
//  React.useEffect(()=>{  
  
//   setBoxesres({...boxesres, total:numeroTotal})
//   console.log("ok")

// }, [])


  return (
    <div className="App">
        <Header  form={form} setForm={setForm}/>
        <Section 
        aparecer={aparecer} 
        setAparecer={setAparecer} 
        setForm={setForm} 
        form={form} liberar={liberar} 
        setLiberar={setLiberar} 
        boxesres={boxesres}
        setBoxesres={setBoxesres}
                     
        />
        <Section2 
        form={form} 
        liberar={liberar} 
        boxesres={boxesres} 
        setBoxesres = {setBoxesres}
        arrayFinal={arrayFinal}
        setArrayFinal={setArrayFinal}
        />
        
    </div>
  );
}

export default App;
