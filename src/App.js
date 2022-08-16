import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {

  const [countryNames, setCountryNames] = useState([])
  const [currentInput, setCurrentInput] = useState("")
  const [multipleCountries, setMultipleCountries] = useState(true)
  


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(countries => countryNameSelector(countries))
  }, [])

  const countryNameSelector = (countries) => {
    const allCountriesNames = []
    countries.data.forEach((country) => {
      allCountriesNames.push(country.name.common)
    })
    setCountryNames(allCountriesNames)
  }

  const handleInput = (event) => {
    setCurrentInput(event.target.value)
  }

  const checkForSingleCountry = () => {
    if (countriesToShow.length == 1){
      setMultipleCountries(false)
    } else{
      setMultipleCountries(true)
    }
  }

  const countriesToShow = countryNames.filter(country => country.toLowerCase().includes(currentInput.toLowerCase()))
  if(countriesToShow.length == 1 && multipleCountries == true){
    setMultipleCountries(false)
  } 
  if(countriesToShow.length > 1 && multipleCountries == false){
    setMultipleCountries(true)
  }
  
  //To do: 
  //Change display state if only 1 country available
  //Display relevant information about it
  
  return (
    <div>
      <h1>Search for countries:</h1>
      <input value={currentInput} onChange = {handleInput}/>
      <h1>Countries: </h1>
      <div>
        { multipleCountries ? countriesToShow.map(name => <p key={name}>{name}</p>) : <h1>Test</h1>}
      </div>
    </div>
  )
}

export default App