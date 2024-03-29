import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { getYYYYMMDD, addDays } from '../utils/dateHelpers.js'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export function Filters(props) {
  const today = new Date()

  const [filtersState, setFiltersState] = React.useState({
    fromDate: today,
    toDate: addDays(today, 1),
    country: 'All countries',
    price: 'All prices',
    size: 'All sizes',
  })
  // useEffect(() => {
  // console.log('*****')
  // props.onFiltersChange(filtersState)
  // document.title = `You clicked ${count} times`;
  // })
  const filtersChangeHandler = ev => {
    let updatedFiltersState = { ...filtersState }
    // console.log(ev.target.name + '->' + ev.target.value)
    switch (ev.target.name) {
      case 'fromDate':
        let newFromDate = new Date(ev.target.value + 'T12:00:00.100Z')
        updatedFiltersState.fromDate = newFromDate

        if (newFromDate - updatedFiltersState.toDate.getTime() > 0) {
          updatedFiltersState.toDate = addDays(newFromDate, 1)
        }
        break
      case 'toDate':
        let newToDate = new Date(ev.target.value + 'T12:00:00.100Z')
        updatedFiltersState.toDate = newToDate
        break
      case 'country':
      case 'price':
      case 'size':
        updatedFiltersState[ev.target.name] = ev.target.value
        break
    }
    // console.log('Updating Filters state->')
    setFiltersState(updatedFiltersState)
    // console.log(updatedFiltersState)
    props.onFiltersChange(updatedFiltersState)
  }
  const resetHandler = ev => {
    setFiltersState({
      fromDate: today,
      toDate: addDays(today, 1),
      country: 'All countries',
      price: 'All prices',
      size: 'All sizes',
    })
    props.onFiltersChange({})
  }

  return (
    <nav className='bg-blue-700'>
      {/* <div className='bg-blue-700 container mx-auto flex justify-evenly py-6'> */}
      <form className=' container mx-auto flex justify-evenly py-6'>
        <input onChange={filtersChangeHandler} className='rounded-lg' type='date' name='fromDate' value={getYYYYMMDD(filtersState.fromDate)} min={getYYYYMMDD(today)} max={getYYYYMMDD(addDays(today, 60))} />

        <input onChange={filtersChangeHandler} className='rounded-lg' type='date' name='toDate' value={getYYYYMMDD(filtersState.toDate)} min={getYYYYMMDD(addDays(filtersState.fromDate, 1))} max={getYYYYMMDD(addDays(today, 60))} />

        <select name='country' className='rounded-lg' value={filtersState.country} onChange={filtersChangeHandler}>
          <option selected>All countries</option>
          {props.countries.map((country, index) => {
            return <option value={country}>{country}</option>
          })}
        </select>

        <select name='price' className='rounded-lg' value={filtersState.price} onChange={filtersChangeHandler}>
          <option selected>All prices</option>
          {props.prices.map((price, index) => {
            return <option value={index + 1}>{price}</option>
          })}
        </select>
        <select name='size' className='rounded-lg' value={filtersState.size} onChange={filtersChangeHandler}>
          <option selected>All sizes</option>
          {props.sizes.map((size, index) => {
            return <option value={size}>{size}</option>
          })}
        </select>
        <Button primary className='bg-white rounded-lg p-2' onClick={resetHandler}>
          Reset
        </Button>
      </form>
      {/* </div> */}
    </nav>
  )
}

export default Filters
