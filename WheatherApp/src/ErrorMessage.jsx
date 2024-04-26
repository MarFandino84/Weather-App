import React from 'react'



const ErrorMessage = () => {
  return (
    <>

   <section className="w-full flex flex-col justify-center items-center backdrop-blur">
      <img className='w-[25vw]' src={"./notfound.webp"} alt='not found image' />
     <h3 className="p-2  text-white text-[2vw]">Not found, Please try again!</h3>
      
  
   </section>   

      
    </>
  )
}

export default ErrorMessage
