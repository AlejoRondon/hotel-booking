import './App.css'
import { hotelsDataDB } from './data.js'
import Filters from './components/Filters'
import React from 'react'
import Hotels from './components/Hotels'
function App() {
  const [filteredHotelList, setFilteredHotelList] = React.useState(hotelsDataDB)
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
    console.log('New filtered values: ')
    console.log(newFilteredValues)
    applyFilters(newFilteredValues)
  }
  const applyFilters = filters => {
    let updatedFilteredHotelList = hotelsDataDB.map(hotel => {
      return { ...hotel, size: hotel.rooms <= 10 ? 'Small' : hotel.rooms > 10 && hotel.rooms <= 20 ? 'Medium' : 'Large' }
    })
    console.log(updatedFilteredHotelList)
    if (filters.country.indexOf('All countries') === -1) {
      console.log('Applying country filter: ' + filters.country)
      updatedFilteredHotelList = updatedFilteredHotelList.filter(hotel => {
        return hotel.country === filters.country
      })
    }
    if (filters.price.indexOf('All prices') === -1) {
      console.log('Applying price filter: ' + filters.price)
      updatedFilteredHotelList = updatedFilteredHotelList.filter(hotel => {
        return hotel.price == filters.price
      })
    }
    if (filters.size.indexOf('All sizes') === -1) {
      console.log('Applying size filter: ' + filters.size)
      updatedFilteredHotelList = updatedFilteredHotelList.filter(hotel => {
        return hotel.size === filters.size
      })
    }
    setFilteredHotelList(updatedFilteredHotelList)
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
      <main>
        <Hotels hotels={filteredHotelList}></Hotels>
      </main>
    </>
  )
}

export default App
