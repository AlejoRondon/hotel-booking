import React from 'react'
import Hotel from './Hotel'

// slug: 'la-bamba-de-areco',
// name: 'La Bamba de Areco',
// photo: './images/la-bamba-de-areco.jpg',
// description: 'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
// availabilityFrom: today.valueOf(),
// availabilityTo: today.valueOf() + 864000000, // 10 days
// rooms: 11,
// city: 'Buenos Aires',
// country: 'Argentina',
// price: 4,

function Hotels(props) {
  return (
    <div className='container mx-auto'>
      {props.hotels.map(hotel => {
        return (
          <Hotel
            key={hotel.slug}
            slug={hotel.slug}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            availabilityFrom={hotel.availabilityFrom}
            availabilityTo={hotel.availabilityTo}
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
            price={hotel.price}></Hotel>
        )
      })}
    </div>
  )
}

export default Hotels
