import React, { useEffect, useState } from 'react'

function SortLogic({sort, allCountries, setCountries}) {
    let sortedCountries = []
    useEffect(() => {
        setCountries(allCountries.sort((country1, country2) => country1.name.common.localeCompare(country2.name.common)))
    }, [])

    allCountries = allCountries.map((country) => {
        if(typeof country.population == "string" && country.population.includes(",")) {
            const populationArr = country.population.split(",")
            const numPopulation = parseInt(populationArr.join(''), 10)
            country.population = numPopulation
        } else {
            country.population = Number(country.population)
        }
        return country
    })

    const handleSortChange = () => {
        setCountries(() => {
            if(sort == "alphabet") {
                sortedCountries = allCountries.sort((country1, country2) => country1.name.common.localeCompare(country2.name.common))
            } else if(sort == "population down") {
                sortedCountries = allCountries.sort((country1, country2) => country2.population - country1.population)
            } else if(sort == "population up") {
            sortedCountries = allCountries.sort((country1, country2) => country1.population - country2.population)
            } else if(sort == "area") {
                sortedCountries = allCountries.sort((country1, country2) => country2.area - country1.area)
            }
            return sortedCountries
        })
        
        
    }

    useEffect(() => {
        handleSortChange()
    }, [sort])

  return (
    <div className='sortedby'>
        <h3 style={{textTransform: 'capitalize'}}>Sorted By {sort} </h3>
    </div>
  )
}

export default SortLogic