import React from 'react';
import FocusButton from '../Shared/FocusButton';
import office from '../../assets/images/office.jpg'

const DentalOffice = () => {
    return (
        <div>
            <div class="hero mt-28" data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='ml-6'>
                        <h1 class="text-3xl font-bold">BRAND NEW FULLY DIGITAL DENTAL OFFICE</h1>
                        <p class="py-6">Our state-of-the-art clinic offers today’s newest dental technologies, you can rest assured that you’re getting more precise and less painful treatments at SmileHub. We’re committed to providing an exceptional dental experience and our clinic’s clean and welcoming atmosphere will have you feeling relaxed as soon as you walk in.</p>
                        <FocusButton>Our Clinic</FocusButton>
                    </div>
                    <img src={office} class="lg:h-72 rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default DentalOffice;