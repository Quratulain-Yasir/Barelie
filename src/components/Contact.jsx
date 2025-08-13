import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

      const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_iiot3fn', 'template_q4osiy3', formData, 'jU2WB2ZlqtM_DCUM9')
      .then((result) => { 
        toast.success('Message sent')
      }, (error) => {
        toast.error(error);
      });

    setFormData({ name: '', email: '', message: '' });
  };
  return (
    
<section id="contact" className='mx-5 my-10'>
        <form onSubmit={handleSubmit}  className="min-h-[80vh] flex items-center">
            <div  className="flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-full border border-yellow-200 rounded-xl text-zinc-600 text-sm shadow-lg shadow-gray-600">
                <h2 className="text-2xl font-semibold text-center" >Contact Us</h2>
                <p className=' text-center'>We're just a message away — here to assist you</p>
            
                    <div className="w-full">
          <p>Name</p>
          <input className="border border-black rounded w-full p-2 mt-1" 
            type="text" name='name' onChange={handleChange} value={formData.name} 
             placeholder='Name' required
          />
    </div>   
            
        <div className="w-full">
          <p>Email</p>
          <input className="border border-black rounded w-full p-2 mt-1"
            type="email" name='email' onChange={handleChange} value={formData.email}
              placeholder='Email here...' required
          />
        </div> 
    <div className="w-full">
          <p>Write Your Message</p>
          <input className="border border-black rounded w-full p-2 mt-1"
            type="text"
            placeholder='Write here...'  name='message' value={formData.message} onChange={handleChange} required
          />
        </div>
        <button className="bg-yellow-200 text-black-50 w-full py-2 rounded-md text-base hover:shadow-md">Submit</button>
        </div>
        </form>
</section>
     
  )
}

export default Contact