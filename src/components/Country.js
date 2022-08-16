import React from 'react';


const Country = ({data}) => {
  console.log(data)
  return (
    <div>
      <h1>{data.name.common}</h1>
      <h3>General Info:</h3>
      <ul>
        <li>Region: {data.region}</li>
        <li>Capital: {data.capital}</li>
        <li>Area: {data.area}km²</li>
      </ul>
      <h3>Languages: </h3>
      <ul>
        {Object.values(data.languages).map((lang, id) => <li key={id}>{lang}</li>)}
      </ul>
      <img src={data.flags.png}/>
    </div>
  );
};

export default Country;