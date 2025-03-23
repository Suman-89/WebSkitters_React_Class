import React, { useContext } from 'react'
import NoteContext from './context'

export default function Address() {

    const place = useContext(NoteContext);

  return (
    <>
      <span>Address: <h2>{place.address}</h2></span>
    </>
  )
}
