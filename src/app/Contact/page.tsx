"use client"
import {useState} from 'react';
import React from 'react'
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    subject:"",
    message:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.message){
      alert("please fill in all fields!");
      return;
    }

    setFormData({name: '', email: '', subject:'', message:''});
    setIsSubmitted(true);
  };
  return (
    <div>
        <div className='flex flex-col md:flex-row lg:flex-row'>
        <div>
            <h1 className='text-2xl text-secondary text-start px-5 font-bold mt-8'>Contact Us</h1>
            <p className='text-sm md:text-md lg:text-md text-start font-normal px-5 text-slate-400 mt-3'>Welcome to our website! We offer a wide range of high quality and stylish chairs and sofas that can elevate<br/>
             the look and comfort of your living space. If you have any questions about our products, or if you are looking 
            <br/> for customized furniture to suit your needs, our team is here to assist you.</p>
        </div>
        <div>
            <h1 className='text-2xl text-secondary text-start px-5 font-bold mt-8'>Contact Way</h1>
            <Image src="/Image/contactus.svg" alt="contact image" width={400} height={400} className='px-10 mt-3'/>
        </div>
        </div>
      <h1 className='text-3xl text-start font-bold px-5 mt-8 text-secondary'>Get In Touch</h1>
      <p className='text-sm md:text-md lg:text-md text-start font-normal px-5 text-slate-400 mt-3'>Please leave your message here, and we will
        <br/>get back to you as soon as possible.</p>
        <div className='flex flex-col md:flex-row lg:flex-row'>
      <form onSubmit={handleSubmit} className='w-full max-w-xl mt-3'>
              <div className='flex flex-col gap-1 p-1 ml-2'>
              <label htmlFor='name'>Your Name</label>
              <input 
              type='text'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='name' 
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 p-1 ml-2'>
            <label htmlFor='email'>Your Email</label>
              <input 
              type='email'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='email' 
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 p-1 ml-2'>
            <label htmlFor='subject'>Subject</label>
            <textarea
            className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
            id='subject'
            name='subject'
            rows={2}
            value={formData.subject}
            onChange={handleChange}
            required
            ></textarea>
            </div>
            <div className='flex flex-col gap-1 p-1 ml-2'>
            <label htmlFor='msg'>Type Your Message</label>
            <textarea
            className='h-[150px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
            id='message'
            name='message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            </div>
            <button 
            type="submit" 
            className='bg-green-800 hover:bg-green-500 text-black hover:text-white text-xl ml-2 p-2 mt-2 mb-6 border rounded-md cursor-pointer'
            >
            Submit
            </button>
            </form>
            
            {isSubmitted && (
              <div className='mt-4 pl-12 text-orange-600 font-serif'>
                Thankyou for contacting us!<br /> We will get back to you soon.
                </div>
                
            )}
 
      <div>
        <Image src="/Image/contact.svg" alt="contact image" width={400} height={400}/>
      </div>
      </div>
    </div>
  )
}

export default ContactPage;