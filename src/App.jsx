import { useEffect, useState } from "react";
import Countries from "./Country";
import Country from "./Country";

const url = 'https://country-facts.p.rapidapi.com/all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8754204179msh53c529294b38389p11fcb5jsndef19b7d8baa',
		'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
	}
};


const App = () => {
  const [countriesData, setCountriesData] = useState([])
  const [resetData, setResetData] = useState([])
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const fetchCountries = async () => {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data);
        setCountriesData(data)
        setResetData(data)
      }
      fetchCountries()
    } catch (error) {
      console.log(error);
    }    
  }, [])

  const searchSubmit = () => {
    const searchInput = document.getElementById('search').value;
    if(!searchInput) {
      setCountriesData(resetData) 
    } else {
      const filteredCountries = resetData.filter((country) => {
        return country.name.common.toLowerCase() === searchInput.toLowerCase()
      }) 
      if(filteredCountries){} setCountriesData(filteredCountries);
    }
  }

  return (
    <body>
      <header>
        <h1>Countries</h1>
        <div className="search-input">
          <label htmlFor="search">Search Country: </label>
          <input type="text" id="search" name="search"/>
          <button className="btn" onClick={searchSubmit}>Search</button>
        </div>
        <div className="sortoptions">
          <label htmlFor="sort">Sort By:</label>
          <select name="sort" id="sort">
            <option value="alphabet">Alphabet</option>
            <option value="population down">Population down</option>
            <option value="population up">Population up</option>
            <option value="area">Area</option>
          </select>
        </div>
        
      </header>
      <main>
          {countriesData.map((country) => {
            return <Country {...country} />
          })}
      </main>
      <footer>
        
      </footer>
    </body>
  )
};
export default App;
