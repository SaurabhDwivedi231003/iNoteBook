//import React from 'react'
//import {useContext} from 'react'   // OR 
import React , {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export const About = () => {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update();
    //to remove warning add below line
    // eslint-disable-next-line 
  } ,[])

  return (
    <div>
        Thus is about {a.state.name} <br/>
        Thus is about {a.state.class}
    </div>
  )
}

export default About