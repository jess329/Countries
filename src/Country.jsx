import React, { useEffect } from 'react'

function Country(country) {

  return (
  <div className="country">
    <img src={country.flag} alt={country.name.common} />
    <h3>Country: {country.name.common}</h3>
    <h4>Population: {country.population} </h4>
  </div>
  )
}

export default Country