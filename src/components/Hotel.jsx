import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
// const HotelTitle = (props)=>{

// }
const HotelTitle = styled.h1`
  /* background-color: red; */
  font-family: 'Coiny', cursive;
  font-size: 1.5rem;
`
function Hotel(props) {
  return (
    <div className='bg-purple-50 m-4 flex flex-col rounded-2xl overflow-hidden'>
      <img src={props.photo}></img>
      <div className='p-3'>
        <HotelTitle>{props.name}</HotelTitle>
        <p>
          <strong>slug:</strong> {props.slug}
        </p>
        {/* <p>
          <strong>name:</strong> {props.name}
        </p> */}
        <p>
          <strong>description:</strong> {props.description}
        </p>
        <p>
          <strong>availabilityFrom:</strong> {new Date(props.availabilityFrom).toLocaleDateString()}
        </p>
        <p>
          <strong>availabilityTo:</strong> {new Date(props.availabilityTo).toLocaleDateString()}
        </p>
        <p>
          <strong>rooms:</strong> {props.rooms}
        </p>
        <p>
          <strong>city:</strong> {props.city}
        </p>
        <p>
          <strong>country:</strong> {props.country}
        </p>
        <p>
          <strong>price:</strong> {props.price}
        </p>
      </div>
    </div>
  )
}

export default Hotel
