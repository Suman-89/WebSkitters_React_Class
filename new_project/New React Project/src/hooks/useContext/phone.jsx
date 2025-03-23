import React, { useContext } from 'react'
import NoteContext from './context'

export default function Phone() {

    const phone = useContext(NoteContext);
    
  return (
    <>
      <span>Phone: <h2>{phone.phone}</h2></span>
      
    </>
  )
}
