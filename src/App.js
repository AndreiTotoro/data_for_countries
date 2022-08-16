import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {

  const [countryNames, setCountryNames] = useState([])

  const allCountriesNames = []


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(countries => countryNameSelector(countries))
  }, [])

  const countryNameSelector = (countries) => {
    countries.data.forEach((country) => {
      allCountriesNames.push(country.name.common)
    })
    setCountryNames(allCountriesNames)
  }
  
  //To do: 
  //Implement searching
  //Change display state if only 1 country available
  //Display relevant information about it
  return (
    <div>
      <form>
        find countries <input />
      </form>
      <h1>Countries: </h1>
      <div>
        {countryNames.map(name => <p key={name}>{name}</p>)}
      </div>
    </div>
  )
}

export default App