import './App.css'
import { hotelsDataDB } from './data.js'
import Filters from './components/Filters'
import React, { useState } from 'react'
import Hotels from './components/Hotels'
import translate from 'google-translate-open-api'

import styled, { css } from 'styled-components'

function App() {
  const [filteredHotelList, setFilteredHotelList] = useState(hotelsDataDB)
  const [headerText, setHeaderText] = useState('Use filters to find your the perfect hotel to enjoy your vacations')
  //Getting all countries
  let countriesList = hotelsDataDB.map(hotel => {
    return hotel.country
  })
  //delete repeated countries
  countriesList = countriesList.filter(function (country, index) {
    return countriesList.indexOf(country) == index
  })
  // console.log(countriesList)

  const filtersChangeHandler = newFilteredValues => {
    console.log('New filtered values: ')
    console.log(newFilteredValues)
    applyFilters(newFilteredValues)
  }
  const applyFilters = filters => {
    //Checking if filters is empty ===> Filters were resetted
    if (filters && Object.keys(filters).length === 0 && filters.constructor === Object) {
      console.log('Filters is empty(Filters were resetted) - All hotels list will be showed')
      setHeaderText('Use filters to find your the perfect hotel to enjoy your vacations')
      setFilteredHotelList(hotelsDataDB)
      return
    }
    //Converting rooms in Size for each hotel
    let updatedFilteredHotelList = hotelsDataDB.map(hotel => {
      return { ...hotel, size: hotel.rooms <= 10 ? 'Small' : hotel.rooms > 10 && hotel.rooms <= 20 ? 'Medium' : 'Large' }
    })
    // console.log(updatedFilteredHotelList)

    updatedFilteredHotelList = updatedFilteredHotelList.filter(hotel => {
      return filters.fromDate.valueOf() > hotel.availabilityFrom === filters.toDate.valueOf() < hotel.availabilityTo
    })

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

    let headerTextComposition = `
    Now, you're looking at the ${updatedFilteredHotelList.length} available ${filters.size === 'All sizes' ? '' : filters.size} hotels between ${filters.fromDate.toLocaleDateString()} and
    ${filters.toDate.toLocaleDateString()}
    ${filters.country === 'All countries' ? '' : `, that are located in ${filters.country}`}
    ${filters.price === 'All prices' ? '' : `, with price ${'$'.repeat(filters.price)}`}`
    setHeaderText(headerTextComposition)

    setFilteredHotelList(updatedFilteredHotelList)
  }
  return (
    <>
      <header className='bg-green-100'>
        <div className='container mx-auto py-14'>
          <h1 className='text-4xl font-bold'>Bookining</h1>
          <h1 className='text-2xl font-bold'>Happy hotel reservation & vacations</h1>
          <br />
          <p className='text-xl'>{headerText}</p>
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
