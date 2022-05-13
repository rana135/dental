import React from 'react';
import { useForm } from "react-hook-form";
import conatactBackground from '../../assets/images/appointment.png'

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div style={{ background: `url(${conatactBackground})`, maxWidth: "100%", maxHeight: "100%" }} className='grid justify-center justify-items-center rounded-lg mt-24'>
                <div className='mt-5 text-center'>
                    <h2 className='text-xl text-secondary font-bold'>CONTACT US</h2>
                    <h1 className='text-white text-3xl'>Stay Connected With Us</h1>
                </div>
                <form data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000" 
                    style={{ padding: "10%" }} onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" className=' mt-2 rounded-lg w-full h-10  px-3' {...register("email")} placeholder="Email Address" required /><br></br>

                    <input type="text" className=' mt-2 rounded-lg w-full h-10 px-3' {...register("text")} placeholder="Subject" required /><br></br>

                    <textarea name="message" id="" cols="40" rows="6" className=' mt-2 mb-3 rounded-lg px-3' placeholder="message" required></textarea>
                    <br></br>

                    <input
                        type="submit" className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold mx-auto block" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;