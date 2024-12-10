import React from 'react'
import ProductSm from './ProductSm'

export default function CatalogSm({prod}) {
   
  return (
    <div className='hero'>
    {
        prod.map(e => <ProductSm key={e.id} e={e}/>)
    }
    </div>
  )
}
