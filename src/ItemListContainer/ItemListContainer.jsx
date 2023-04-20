import {collection, getDocs, getFirestore} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {


  const [services, setServices] = useState({})
  
  useEffect(() => {

    const db = getFirestore()
    const queryCollections = collection(db, 'services')

    getDocs(queryCollections)
    .then(res => res.docs.map(service => ({id: service.id, ...service.data()})))
    .catch(err => console.log(err))

  })

    
  return (
    <ItemList services={services}/>
  )
}

export default ItemListContainer