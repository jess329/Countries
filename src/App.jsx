import { useEffect, useState } from "react";
import Countries from "./Country";
import Country from "./Country";
import SortLogic from "./SortLogic";

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
  const [sort, setSort] = useState("alphabet")

  useEffect(() => {
    try {
      const fetchCountries = async () => {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data);
        setCountriesData(data)
        setResetData(data)
        setLoading(false)
      }
      fetchCountries()
    } catch (error) {
      console.log(error);
      setError(true)
    }    
    
  }, [])

  
  if(loading) return (
    <div className="message">
      <h1 >Loading...</h1>
    </div>
  ) 
  if(error) return (
    <div className="message">
      <h1>There was an error.</h1>
    </div>
  ) 
  
  const searchSubmit = (e) => {
    e.preventDefault()
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
        <form className="search-input" onSubmit={searchSubmit}>
          <input type="text" id="search" name="search" placeholder="Search Country"/>
          <button className="btn search" type="submit">Search</button>
        </form>
        <div className="sortoptions">
          <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
            <option value="alphabet">Alphabet</option>
            <option value="population down">Population down</option>
            <option value="population up">Population up</option>
            <option value="area">Area</option>
          </select>
        </div>
        <SortLogic sort={sort} allCountries={resetData} setCountries={setCountriesData} />
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
