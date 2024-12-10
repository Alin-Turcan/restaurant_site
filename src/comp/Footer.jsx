import React from 'react'

export default function Footer() {
  return (
    <>
    <hr className='mb-[50px] opacity-45'/>
    <div className='flex items-center justify-around footer'>
    <div className='mb-[200px]'>
      <div className='flex items-center justify-start gap-10'> 
        <img src="/public/logo-footer.png" alt=""  className='w-[220px] h-[140px]'/>
        <img src="/public/footer-2.webp" alt="" className='w-[160px] h-[140px] opacity-35 object-contain' />
      </div>
      <div>
        <p className='text-footer'>We accept credit cards:</p>
        <img src="/public/logo-visa.jpg" alt="" className='w-[400px] h-[60px] object-contain mb-[100px]'/>
        <p className='text-footer rights-reserved'>© All rights reserved. Made by <strong>Alin Turcan</strong></p>
      </div>
    </div>
    <div className='mb-[150px]'>
        <div className='flex justify-center gap-[100px]'>
        <div className='flex-col items-center text-contacts'>
            <h2 className='menu-text-footer text-2xl'>MENU</h2>
            <p>Food Delivery</p>
            <p>Sherry Collection</p>
            <p>About</p>
            <p>Contacts</p>
        </div>
        <div className='text-support '>
            <h2 className='support-text-footer'>SUPPORT</h2>
            <p>User Agreement</p>
            <p>Payment and Delivery</p>
        </div>
        </div>
        <div className='flex items-center flex-col mt-14 mr-[198px]'>
            <h2 className='our-projects '>OUR PROJECTS</h2>
           <div className='flex items-center ml-[180px]'>
           <img src="/public/tandyr.png" alt=""  className='w-[200px] h-[170px] object-contain'/>
           <img src="/public/village.png" alt="" className='w-[220px] h-[100px] object-contain'  />
           </div>
        </div>
    </div>
    </div>
    </>
  )
}
