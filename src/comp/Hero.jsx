import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Catalog from './Catalog'
import HeroSm from './HeroSm'

export default function Hero() {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get("https://670fb005a85f4164ef2b789f.mockapi.io/api/city-traveler/restik")
        .then((res) => setProduct(res.data))
    },[])

  return (
    <main>
        {
            product && (
                <Catalog product={product} />
            )
        }
         <HeroSm />
    </main>
  )
}
