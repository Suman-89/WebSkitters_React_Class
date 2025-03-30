import React from 'react'

export default function Child({value}) {
    console.log(value)
  return (
    <>
      <h1>{value}</h1>
    </>
  )
}
