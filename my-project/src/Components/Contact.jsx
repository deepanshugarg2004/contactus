import React from 'react';
import {useState} from 'react';

const Contact = () => {
    const [value,setValue] = useState(0);  
  return (
    <>
    
   




    <div className="flex flex-col-reverse items-start md:flex lg:flex lg:flex-row-reverse  md:flex-col justify-center m-4 lg:mt-[5rem] min-h-screen py-10">



       
        <div className="w-full max-w-lg bg-white lg:w-[40%] p-8 md:max-w-[90%] rounded-2xl shadow-2xl mt-6 md:mt-0 sm:ml-[3rem] md:ml-10">
            <h2 className="text-rose-700 text-[1.5rem] lg:text-[1.8rem] md:text-[1.8rem] xl:text-[2.2rem]   sm:text-[2rem] font-bold mb-6 underline underline-offset-8">Write to us</h2>
            <form id="contact-form" className="space-y-4">
            <div>
                <label for="email" className="block mb-1 md:mt-8 lg:text-[1.4rem] md:text-[1.5rem]">Email Address</label>
                <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-1 border md:h-[2.4rem] border-rose-300 rounded"
                />
            </div>
            <div>
                <label for="helpType" className="block md:mt-6 lg:mt-4 lg:text-[1.4rem] md:text-[1.5rem] mb-1">What do you need help with?</label>
                <select
                id="helpType"
                name="helpType"
                required
                className="w-full p-1 border md:h-[2.4rem]  border-rose-300 rounded">
                <option value="" disabled selected>Select an option</option>
                <option value="Order related issue" className="font-semibold">Order related issue</option>
                <option value="Payments/Refund" className="font-semibold">Payments/Refund</option>
                <option value="Offers, Discounts, Coupons" className="font-semibold">Offers, Discounts, Coupons</option>
                <option value="Gift card" className="font-semibold">Gift card</option>
                <option value="Account related" className="font-semibold">Account related</option>
                <option value="Other" className="font-semibold">Other</option>
                </select>
            </div>
            <div>
                <label for="subject" className="block mb-1  lg:mt-4 lg:text-[1.4rem] md:mt-6 md:text-[1.5rem]">Subject</label>
                <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-1 border md:h-[2.4rem] border-rose-300 rounded"/>
            </div>
            <div>
                <label for="description" className="block  lg:mt-4 lg:text-[1.4rem] md:mt-6 md:text-[1.5rem] mb-1">Description</label>
                <textarea
                id="description"
                name="description"
                required 
                className="w-full p-2 border md:h-[5rem] lg:mb-0.5 border-rose-300 rounded"
                maxlength="200" onChange={(e)=>setValue(e.target.value.length)}
                ></textarea>
                <div className="text-right text-sm text-gray-500"><span id="char-count">{value}</span>/200</div>
            </div>
            <div>
                <input type="file" id="file" name="file" accept=".png, .jpg, .jpeg" multiple className="hidden" />
                <label for="file" className="cursor-pointer inline-flex items-center px-4 py-2 border border-rose-300 rounded-md shadow-sm text-sm font-medium text-rose-600 bg-white hover:bg-gray-50">
                <span className="ml-2 md:text-[1.4rem] lg:text-[1.2rem]">Upload images</span>
                </label>
                <p className="text-sm md:text-[1.4rem] lg:text-[1.2rem] lg:my-4 md:my-7 text-gray-500 mt-[1rem]">Allowed formats: PNG, JPG, JPEG. Maximum file size: 8MB</p>
            </div>
            <button type="submit" className="w-full md:text-[1.5rem] lg:text-[1.2rem] bg-rose-500 text-white p-2 rounded hover:bg-rose-600">Create ticket</button>
            </form>
        </div>


        <div className="w-full pt-5 md:w-sm md:mt-14 lg:w-[45%] lg:ml-0 sm:ml-6 md:ml-0 px-4 md:px-8">
            <h1 className="text-rose-700 text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem]  md:text-[2.5rem] sm:text-[2.3rem] font-bold ">Contact us for more <h1 className=" text-rose-700 xl:text-[2.5rem] lg:text-[2.2rem]  sm:text-[2.3rem] md:text-[2.5rem]  text-[2rem] font-bold mb-5 underline underline-offset-8">information!</h1></h1>
            <p className="mb-6 lg:text-[1.6rem] xl:text-[1.8rem] sm:text-[1.5rem] md:text-[1.7rem] text-[1rem]">Do you have any queries? Reach out to us and we are happy to help you!</p>
            <div className="flex items-center mb-4">
                <div className="text-rose-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                </div>
                <div>
                    <p className=' text-[1rem] sm:text-[1.4rem] xl:text-[1.7rem] md:text-[1.6rem] lg:text-[1.3rem] '>Call now:</p>
                    <p className="text-rose-600 xl:text-[1.5rem]  md:text-[1.6rem] sm:text-[1.4rem] text-[1rem] lg:text-[1.3rem]  font-semibold">+917423739126</p>
                </div>
            </div>
            <div className="flex items-center mb-4">
                <div className="text-rose-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 00-8 0v1a4 4 0 004 4h0a4 4 0 004-4v-1zm-4 1h0m0 4h.01M4 12h0v8a2 2 0 002 2h12a2 2 0 002-2v-8h0M4 8h16M10 4h4" /></svg>
                </div>
                <div>
                    <p className='sm:text-[1.4rem] xl:text-[1.7rem]  lg:text-[1.3rem] text-[1rem] md:text-[1.6rem]'>Email:</p>
                    <p className="text-rose-600 lg:text-[1.3rem]  md:text-[1.6rem] text-[1rem] sm:text-[1.4rem] xl:text-[1.6rem]  font-semibold">support@divueens.com</p>
                </div>
            </div>
        </div>



    </div>
    
    
    </>
  )
}

export default Contact
