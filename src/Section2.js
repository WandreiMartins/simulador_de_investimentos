import React from 'react'
import TabText from './TabText'


const Section2 = ({form, liberar, boxesres, setBoxesres, arrayFinal, setArrayFinal}) => {
const [blueV, setBlueV] = React.useState('blue');
const [blueG, setBlueG] = React.useState('');

function Clicou (event){
    if(event.target.classList[0] === 'tabVal'){
        setBlueV('blue')
        setBlueG('')
    }
    if(event.target.classList[0] === 'tabGraf'){
        setBlueV('')
        setBlueG('blue')
    }
}



return (
    <section>
        <div className='center'>
            <div className="tabela">
                <div className='menu'>
                    <div className={`tabVal ${blueV}` } onClick={Clicou}>Tabela de valores</div>
                    <div className={`tabGraf ${blueG}`} onClick={Clicou}>Gráfico</div>
                </div>
{/* ----------------------inicio tabela--------------------------- */}
                <div className='tabela-s'>
                    <TabText 
                    form={form} 
                    liberar={liberar} 
                    boxesres = {boxesres}
                    setBoxesres = {setBoxesres}
                    arrayFinal={arrayFinal}
                    setArrayFinal={setArrayFinal}
                    />
                </div>
{/* ----------------------fim da tabela--------------------------- */}

            </div>
        </div>
    </section>
  )
}

export default Section2