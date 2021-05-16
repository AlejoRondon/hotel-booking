import './App.css'
import { hotelsDataDB } from './data.js'
import Filters from './components/Filters'
import React from 'react'
function App() {
  //Filter all countries
  let countriesList = hotelsDataDB.map(hotel => {
    return hotel.country
  })
  //delete repeated countries
  countriesList = countriesList.filter(function (country, index) {
    return countriesList.indexOf(country) == index
  })
  console.log(countriesList)

  const filtersChangeHandler = newFilteredValues => {
    console.log('New filtered values: ' + newFilteredValues)
  }
  return (
    <>
      <header className='bg-green-100'>
        <div className='bg-purple-100 container mx-auto py-14'>
          <h1 className='text-2xl font-bold'>Hoteles</h1>
          <p className='text-xl'>Desde el martes 1 de enero de 2019 hasta el miércoles 2 de enero de 2019</p>
        </div>
      </header>
      <Filters onFiltersChange={filtersChangeHandler} countries={countriesList} prices={['$', '$$', '$$$', '$$$$']} sizes={['Small', 'Medium', 'Large']}></Filters>
    </>
  )
}

export default App
