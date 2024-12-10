import { useState } from "react"

export default function ProductSm({e}) {
  const [value, setValue] = useState(1)

  return (
  <>

    <div className='product'>
      <img src={e.image} alt="" />
      <h1 className='name-product'>{e.name}</h1>
      <p className='quant-prod'>{e.quantity}</p>
      <p className='opacity-45 ingred-prod'>{e.products}</p>
      <p className='price-prod'>{e.price}</p>
      <div className='flex items-center gap-1 info-order mt-[40px]'>
      <div className='input-wrapper'>
       <button className='add-btns' id="minus"onClick={() => setValue(value - 1)}>-</button>
      <input className="i-wrapper" type="number" placeholder='1' value={value} onChange={(s) => {
        setValue(s.target.value)
      }} />
      <button className='minus-btns' onClick={() => setValue(value + 1)}>+</button>
      </div>
      <button className='btn-order ml-6'>Order</button>
    </div>
    </div>
  </>
  )
}
