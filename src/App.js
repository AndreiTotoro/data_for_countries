import { useState, useEffect } from "react"
import axios from "axios"
import Country from "./components/Country"

const App = () => {

  const [countryNames, setCountryNames] = useState([])
  const [currentInput, setCurrentInput] = useState("")
  const [multipleCountries, setMultipleCountries] = useState(true)
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(countries => countryNameSelector(countries))
  }, [])

  const countryNameSelector = (countries) => {
    setCountryData(countries)
    const allCountriesNames = []
    countries.data.forEach((country, id) => {
      allCountriesNames.push({name: country.name.common, id: id})
    })
    setCountryNames(allCountriesNames)
  }

  const handleInput = (event) => {
    setCurrentInput(event.target.value)
  }

  const countriesToShow = countryNames.filter(country => country.name.toLowerCase().includes(currentInput.toLowerCase()))
  if(countriesToShow.length == 1 && multipleCountries == true){
    setMultipleCountries(false)
  } 
  if(countriesToShow.length > 1 && multipleCountries == false){
    setMultipleCountries(true)
  }

  return (
    <div>
      <h1>Search for countries:</h1>
      <input value={currentInput} onChange = {handleInput}/>
      <div>
        { multipleCountries ? countriesToShow.map(country => <p key={country.id}>{country.name}</p>) : <Country data={countryData.data[countriesToShow[0].id]} />}
      </div>
    </div>
  )
}

export default App