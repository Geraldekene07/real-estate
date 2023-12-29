import React from 'react'
import testimonial from '../assets/testimomials.jpg'

const Section5 = () => {
    const back5 = {
        backgroundImage: `url(${testimonial})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
        minHeight: "80vh",
      };
  return (
    <div className='relative' style={back5}>
              <div className="absolute inset-0 bg-purple opacity-80"></div>

        <div>

        </div>
    </div>
  )
}

export default Section5