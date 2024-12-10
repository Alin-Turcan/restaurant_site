import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CatalogSm from './CatalogSm'

export default function HeroSm() {

    const [prod, setProd] = useState(null)

    useEffect(() => {
        axios.get("https://670fb005a85f4164ef2b789f.mockapi.io/api/city-traveler/restikk")
        .then((res) => setProd(res.data))
    },[])

  return (
    <main>
        {
            prod && (
                <CatalogSm prod={prod} />
            )
        }
    </main>
  )
}
