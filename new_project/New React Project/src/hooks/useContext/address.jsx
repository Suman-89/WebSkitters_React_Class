import React, { useContext, useState } from 'react'
import NoteContext from './context'

export default function Address() {


  const data = useContext(NoteContext);
  // console.log('all -> ',data)


  return (
    <>
      {/* <span>Address: <h2>{place.address}</h2></span> */}
      {
        Array.isArray(data) && data.map((v, i) => {
          // console.log('v--> ', v.reviews)
          return (
            <ul className="list-group" key={i}>{i + 1}
              {
                Array.isArray(v.reviews) && v.reviews.map((value, i) => {
                  console.log('value -->  ', value.comment)
                  return (<>
                    <li className="list-group-item" key={i}><strong>Review {i + 1} :</strong> {value.comment}</li>
                  </>)
                })
              }
            </ul>
          )
        })

      }

      {/* {Array.isArray(data) ? (
        data.map((v, i) => (
          <ul className="list-group" key={i}>
            {Array.isArray(v.reviews) &&
              v.reviews.map((value, j) => (
                <li className="list-group-item" key={j}>
                  <strong>Review {j + 1}:</strong> {value.comment}
                </li>
              ))}
          </ul>
        ))
      ) : (
        <p>No data available</p>
      )} */}
    </>
  )
}
