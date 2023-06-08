import React, { useEffect } from 'react'

function Country(props) {

  return (
  <div className="country">
    <img src={props.flag} alt={props.name.common} />
    <div className="info">
      <h3>Country: {props.name.common}</h3>
      <h4>Population: {props.population} </h4>
      <h4>Area: {props.area} km² </h4>
      <h4>Capital: {props.capital} </h4>
    </div>
    
  </div>
  )
}

export default Country