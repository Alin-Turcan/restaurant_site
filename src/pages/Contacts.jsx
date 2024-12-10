import React from 'react'
import Header from "../comp/Header"
import Footer from "../comp/Footer"

export default function Contacts() {
  return (
    <div>
      <Header />
       <div>
       <iframe className='w-full h-[800px] map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.534260684956!2d28.816275494684493!3d47.023173316025996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dd20f3a10dd%3A0x6569648b51d7844!2sLa%20Sarkis!5e0!3m2!1sen!2s!4v1732002984988!5m2!1sen!2s">
        </iframe>
       </div>
       <div className='pop-up-contacts p-16'> 
        <div className='pop-up-first'>
        <h2>Contacts</h2>
        <h1>+373 69 22 4444</h1>
        <h1>+373 60 800 400</h1>
        <p>str. A.Mateevici 113/A, Chisinau</p>
        </div>
        <div className='pop-up-second'>
          <h3>Email for suggestions:</h3>
          <p>lasarkis@mail.ru</p>
        </div>
        <div className='pop-up-third'>
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-square-instagram"></i>
         <i class="fa-brands fa-youtube"></i>
        </div>
       </div>
        <Footer/>
    </div>
  )
}
