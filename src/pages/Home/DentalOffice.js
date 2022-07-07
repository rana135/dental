import React from 'react';
import FocusButton from '../Shared/FocusButton';
import office from '../../assets/images/office.jpg'

const DentalOffice = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={office} class="max-w-sm h-72 rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 class="text-3xl font-bold">BRAND NEW FULLY DIGITAL DENTAL OFFICE</h1>
                        <p class="py-6">Our state-of-the-art clinic offers today’s newest dental technologies, you can rest assured that you’re getting more precise and less painful treatments at SmileHub. We’re committed to providing an exceptional dental experience and our clinic’s clean and welcoming atmosphere will have you feeling relaxed as soon as you walk in.</p>
                        <FocusButton>Our Clinic</FocusButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalOffice;