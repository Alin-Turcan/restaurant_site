import React, { useState } from 'react'
import { IoBagOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useContext } from 'react';
import { ctx } from '../ctx/Context';



export default function Component() {
 

  const globalState = useContext(ctx)
  const state = globalState.state 
  const dispatch = globalState.dispatch

  const total = state.reduce((total,item) => {
    return (
      total + item.price * item.quantity
    )
  },0)

  const [open, setOpen] = useState(true)
  

  const classNameValue = open ? "hidden" : "flex";
  return (
   <>
    <div>
    <button onClick={() => setOpen(!open)} className='shop-div'>
    <IoBagOutline className='shopping-bag'/>
    </button>
    <div  className={classNameValue}>
      <div className=' bg-white sidebar'>
      <button onClick={() => setOpen(!open)} className='close-side'>
      <IoCloseOutline className='close-side-i'/>
      </button>
        <div className='mt-8 p-10 sidebar-div'> 
        <h1 className='text-3xl'>Your order:</h1>
        <br />
      <hr className='hr'/>
      <div className='mt-4 mb-4 order-meal'>
        <div> {state.map((item,index) => {
           return (
            <div className="productt flex items-center gap-4" key={index}>
              <img src={item.image} alt="" className='w-[150px] h-[120px] object-contain' />
              <h1 className='flex items-center'>{item.name}</h1>
            <div className='flex mr-4'>
            <button onClick={() => {
              if (item.quantity > 1) {
                dispatch({type:'DECREASE',payload: item})
              } else {
                dispatch({type: 'REMOVE',payload: item})
              }
            }} >-</button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch({type:'INCREASE',payload:item})} >+</button>
            </div>
              <p className='price-prod'>{item.price}</p>
              <p> {item.quantity * item.price}</p>
              <div onClick={() => dispatch({type: 'REMOVE',payload: item})}>X</div>
          </div>
          )
        } )} 
        
         {state.length > 0 &&
         <div className='total-amount'><p>{total}</p></div>
         }
        </div>
      </div>
      <hr className='hr' />
        </div>
      </div>
    </div>
   </div>
   </>
   
  )
}










