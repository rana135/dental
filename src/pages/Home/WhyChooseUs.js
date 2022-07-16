import React from 'react';
import toothShield from '../../assets/choose us/tooth-shield-icon (1).svg'
import wallet from '../../assets/choose us/wallet-icon.svg'
import dentistChair from '../../assets/choose us/dentist-chair-icon.svg'
import toothCare from '../../assets/choose us/tooth-care-icon.svg'
import icon1 from '../../assets/choose us/icon-1.png'
import icon2 from '../../assets/choose us/icon-2.png'
import icon3 from '../../assets/choose us/icon-3.png'
import icon4 from '../../assets/choose us/icon-4.png'


const WhyChooseUs = () => {
    return (
        <div className='mt-14 ml-6 lg:mr-6'>
            <h1 className='text-center text-primary text-4xl mb-4'>Welcome to The Denta Care </h1>
            <p className='lg:text-xl text-center mb-10'>Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
            <div className='grid grid-cols-1 sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='lg:lg:w-80 mr-5 welcome-service-item bg-green-50' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={toothShield} alt="" />
                    <p className='text-center'>Protect your dental health and manage the costs of your dental care</p>
                </div>

                <div className='lg:w-80 mr-2 welcome-service-item bg-blue-50' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={wallet} alt="" />
                    <p className='text-center'>Spread your costs monthly at no extra charge</p>
                </div>

                <div className='lg:w-80 mr-2 welcome-service-item bg-red-50' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={dentistChair} alt="" />
                    <p className='text-center'>100% immediate cover for check-ups, cleanings and emergencies</p>
                </div>
            </div>

                <div className='text-center mt-24'>
                    <h1 className='text-4xl '>Why Denta Care Dental</h1>
                    <p>We offer flexible schedule and emergency dental services!</p>
                    <p className='text-primary'>_________</p>
                </div>

            <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='lg:w-80 mr-2 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={toothCare} alt="" />
                    <p className='text-center mb-3 text-xl'>DENTAL EMERGENCY</p>
                    <p className='text-center'>Routine dental care can help protect you from a dental emergency. During your routine dental appointments, your teeth get cleaned and examined for signs of problems. </p>
                </div>
                <div className='lg:w-80 mr-5 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={icon1} alt="" />
                    <p className='text-center mb-3 text-xl'>SAME DAY APPOINTMENTS</p>
                    <p className='text-center'>In most cases, the practice will be able to accommodate emergency walk-in appointments or offer a same-day appointment</p>
                </div>
                <div className='lg:w-80 mr-5 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={icon2} alt="" />
                    <p className='text-center mb-3 text-xl'>WORLD CLASS FACILITIES</p>
                    <p className='text-center'>We always try to provide the highest quality services to our patients and strive for continuous quality improvements.Always be with us.</p>
                </div>
                <div className='lg:w-80 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={icon3} alt="" />
                    <p className='text-center mb-3 text-xl'>EXPERT DOCTORS</p>
                    <p className='text-center'>Denta Care has a well experienced and professional team who will help you with every step of your time with us — from your first phone call to any post-treatment needs.</p>
                </div>
                <div className='lg:w-80 ml-2 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={icon4} alt="" />
                    <p className='text-center mb-3 text-xl'>DENTAL SURGERY</p>
                    <p className='text-center'>Dental surgery is any of a number of medical procedures that involve artificially modifying dentition; in other words, surgery of the teeth, gums and jaw bones</p>
                </div>
                <div className='lg:w-80 mr-2 service-item' data-aos="flip-up" data-aos-duration="3000">
                    <img className='mx-auto h-20' src={toothCare} alt="" />
                    <p className='text-center mb-3 text-xl'>
                        Affordable Treatment Cost</p>
                    <p className='text-center'>Many of us would like to have a brighter smile, at Laser Smile Dental you are guaranteed to achieve a brighter smiles. Always be with us.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;