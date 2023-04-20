import React from 'react'

const ItemList = (services) => {
  return (
    <div>

        {services.map(service => <Item key={service.id} service={service}/>)}
    
    </div>
  )
}

export default ItemList