import React, { useState } from 'react'

const Contact = () => {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [message , setMessage] = useState()
  return (
    
<section id="contact" className='mx-5 my-10'>
          <form action="submit"  className="min-h-[80vh] flex items-center">
            <div  className="flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-full border border-yellow-200 rounded-xl text-zinc-600 text-sm shadow-lg shadow-gray-600">
                <h2 className="text-2xl font-semibold text-center" >Contact Us</h2>
                <p className=' text-center'>We're just a message away — here to assist you</p>
            
                    <div className="w-full">
          <p>Name</p>
          <input className="border border-black rounded w-full p-2 mt-1" 
            type="text" onChange={(e)=> e.target.name} value={name} 
             placeholder='Name' required
          />
    </div>   
            
        <div className="w-full">
          <p>Email</p>
          <input className="border border-black rounded w-full p-2 mt-1"
            type="email" onChange={(e)=>{e.target.email}} value={email}
              placeholder='Email here...' required
          />
        </div> 
    <div className="w-full">
          <p>Write Your Message</p>
          <input className="border border-black rounded w-full p-2 mt-1"
            type="text"
            placeholder='Write here...' onChange={(e)=>{e.target.message}} value={message} required
          />
        </div>
        <button className="bg-yellow-200 text-black-50 w-full py-2 rounded-md text-base hover:shadow-md">Submit</button>
        </div>
        </form>
</section>
     
  )
}

export default Contact