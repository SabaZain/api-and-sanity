"use client"
import React, {useState} from 'react';


const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNo: "",
        shippingAddress: "",
        city: "",
        country: "",
        paymentMethod: "COD",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    

    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(isSubmitting) return;
        setIsSubmitting(true);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData(
                {
                    name: "",
                    email: "",
                    contactNo: "",
                    shippingAddress: "",
                    city: "",
                    country: "",
                    paymentMethod: "COD",
                })
        }, 5000);
    };

    

return (
    <div className='max-w-lg mx-auto my-8 p-6 bg-slate-400 rounded shadow-lg'>
        <h1 className='text-2xl font-semibold text-center mb-6'>Checkout To Proceed</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label htmlFor='name' className='block font-medium'>Full Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='email' className='block font-medium'>Email Address</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='contactNo' className='block font-medium'>Contact No</label>
                <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='shippingAddress' className='block font-medium'>Shipping Address</label>
                <input
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='city' className='block font-medium'>City</label>
                <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='country' className='block font-medium'>Country</label>
                <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                />
            </div>
            <div>
                <label htmlFor='paymentMethod' className='block font-medium'>Payment Method</label>
                <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className='w-full p-2 border border-slate-900 rounded'
                required
                >
                <option value="COD">Cash on Delivery</option>
                <option value="Online">Online Payment</option>
                </select>
            </div>

            <div className='flex justify-center mt-6'>
                <button
                type='submit'
                className={`bg-black text-white py-2 px-6 rounded-md hover:bg-green-800 
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
                >
                {isSubmitting ? "Processing..." : "Place Order"}
                </button>
            </div>
            {isSubmitted && !isSubmitting && (
              <div className='mt-4 text-xl text-center text-orange-600 font-semibold'>
                Order Placed Successfully! Hope To See You In Future.
                </div>
        )}
        </form>
    </div>
    );
};

export default CheckoutPage;