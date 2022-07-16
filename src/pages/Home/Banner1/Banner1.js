import React from 'react';
import FocusButton from '../../Shared/FocusButton';
import './Banner1.css'

const Banner1 = () => {
    return (
        <div className="hero bannerImg">
            <div className='bannerDescription'>
                <h1 className="text-white text-5xl font-bold">Everybody Deserves <span className='text-teal-400 font-bold'>a Perfect Smile</span></h1>
                <p className="py-6 text-white">Here at Denta Care Turkey, we believe everyone deserves a healthy and attractive smile. Our experienced cosmetic dentists have seen first-hand the difference having attractive teeth can make to someone’s sense of well-being and self-esteem. Nothing gives us greater pleasure than seeing someone leave our clinic with a big, confident smile. Even though we have completed thousands of smile makeovers over the years, it is always a fantastic feeling.</p>
                <FocusButton>Get Started</FocusButton>
            </div>
        </div>
    );
};

export default Banner1;