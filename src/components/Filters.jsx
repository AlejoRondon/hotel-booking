import React from 'react'

function Filters(props) {
  const getYYYYMMDD = d0 => {
    const d = new Date(d0)
    return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0]
  }
  const addDays = (date, days) => {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const today = new Date()
  const [fromDate, setFromDate] = React.useState(today)
  console.log('fromDate: ' + fromDate)
  const [toDate, setToDate] = React.useState(addDays(today, 2))
  console.log('toDate: ' + toDate)

  const fromDateChangeHandler = ev => {
    let newFromDate = new Date(ev.target.value + 'T12:00:00.100Z')

    if (newFromDate - toDate.getTime() > 0) {
      setToDate(addDays(newFromDate, 1))
    }
    setFromDate(newFromDate)
  }
  const toDateChangeHandler = ev => {
    let newToDate = new Date(ev.target.value + 'T12:00:00.100Z')
    setToDate(newToDate)
  }

  return (
    <nav>
      <div className='bg-blue-700 container mx-auto flex justify-evenly py-6'>
        <input onChange={fromDateChangeHandler} className='rounded-lg' type='date' name='trip-start' value={getYYYYMMDD(fromDate)} min={getYYYYMMDD(today)} max={getYYYYMMDD(addDays(today, 60))} />
        <input onChange={toDateChangeHandler} className='rounded-lg' type='date' name='trip-end' value={getYYYYMMDD(toDate)} min={getYYYYMMDD(addDays(fromDate, 1))} max={getYYYYMMDD(addDays(today, 60))} />
        <select name='country' className='rounded-lg'>
          <option selected>All countries</option>
          <option value='value1'>Colombia</option>
          <option value='value2'>Venezuela</option>
          <option value='value3'>Cuba</option>
        </select>
        <select name='price' className='rounded-lg'>
          <option selected>All prices</option>
          <option value='value1'>$</option>
          <option value='value2'>$$</option>
          <option value='value3'>$$$</option>
          <option value='value3'>$$$$</option>
        </select>
        <select name='size' className='rounded-lg'>
          <option selected>All sizes</option>
          <option value='value1'>Small</option>
          <option value='value2'>Medium</option>
          <option value='value3'>Large</option>
        </select>
      </div>
    </nav>
  )
}

export default Filters
