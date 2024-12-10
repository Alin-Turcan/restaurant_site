import React from 'react'
import Product from './Product'

export default function Catalog({product}) {
   
  return (
    <div className='hero'>
    {
        product.map(e => <Product key={e.id} e={e}/> )       
    }
    </div>
  )
}
