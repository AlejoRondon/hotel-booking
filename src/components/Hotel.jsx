import React from 'react'

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

function Hotel(props) {
  return (
    <div className='bg-purple-200 my-4 flex flex-col rounded-2xl overflow-hidden'>
      <img src={props.photo}></img>
      <div className='p-3'>
        <p>
          <strong>slug:</strong> {props.slug}
        </p>
        <p>
          <strong>name:</strong> {props.name}
        </p>
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
