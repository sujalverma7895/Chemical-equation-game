import React from 'react';
import img2 from './second-reactants.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Secondstage=()=>{
    const [dis,setdis]=useState(true)
    const [silver,setsilver]=useState(false)
    const [bromine,setbromine]=useState(false)
    const [rightpopup,setrightpopup]=useState("none")
    const [wrongpopup,setwrongpopup]=useState("none")
    const[next,setnext]=useState('none')
    const[retry,setretry]=useState('none')
    const task1=()=>{
      setdis(false)
      setsilver(true)
      setbromine(false)
    }
    const task2=()=>{
      setdis(false)
      setbromine(true)
      setsilver(false)
    }
   const submit=()=>{
    console.log("hiii")
    if (silver===true) {
      setrightpopup('right-popup')
      setwrongpopup("none")
      setnext('next')
      setretry("none")
    }
    else if(bromine===true){
      setwrongpopup("wrong-popup")
      setrightpopup('none')
      setsilver(false)
      setretry("retry")
      setnext("none")
    }
    else{}
   }
    return<div className='main-wraper'>
    <div className='main'>
      <div className='left-side'>
        <p className='left-topic'>Balance Chemical Equation</p>
        <p className='left-equation'>2Ag + Br<sub>2</sub>  =   2AgBr</p>
        <img className='image1' src={img2} alt='jbj' />
      </div>
      <div  className='right-side'>
      <div className='right-side-button'>
          <button className='reset'>Reset</button>
          <button className='info'>i</button>
        </div>
        <p className='right-first-p'>On the left is a balance chemical equation and the available reactants for a reaction.
          Determine which reactant will run out first
        </p>
        <p className='right-second-p'>
          Question:2 of 6
        </p>
        <p className='right-third-p'>
          What is limiting reactant?
        </p>
        <p className='right-radio-button'><input name='one' onClick={task1} type='radio'/> silver</p>
        <p className='right-radio-button'><input name='one'onClick={task2} type='radio'/> Bromine</p>
        <button  disabled={dis}className='submit-button' onClick={submit}>Submit Answer</button>
        <button className={next}><Link className="link" to="/Thirdstage">Next</Link></button>
        <button className={retry}><Link className="link" to="/">Retry</Link></button>
      </div>
      <div className={rightpopup}>
        <p>right</p>
      </div>
      
      <div className={wrongpopup}>
        <p>wrong</p>
      </div>
    </div>
  </div>
}
export default Secondstage;