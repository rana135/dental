import React from 'react';
import FocusButton from '../../Shared/FocusButton';
import './Banner1.css'

const Banner1 = () => {
    return (
        <div className="hero bannerImg">
            <div className='bannerDescription'>
                <h1 className="text-white text-5xl font-bold">Providing
                    Best <span className='text-blue-400 font-bold'>Health <br/> Solution !</span></h1>
                <p className="py-6">At Smile Hub we understand the demands of a busy work schedule and can offer the very latest in screening, preventative and aesthetic dental care at all of our clinics.We are a multi-cultural team of expert dental professionals practising right in the heart of the City of London. With diverse skills and a remarkable range of experience we can offer every kind of general dental service to a very high standard.The most valuable thing is your health.So We always try to our best.</p>
                <FocusButton>Get Started</FocusButton>
            </div>
        </div>
    );
};

export default Banner1;