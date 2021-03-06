import React from 'react';
import statement from '../../assets/images/about.webp'
import FocusButton from '../Shared/FocusButton';

const Statement = () => {
    return (
        <div className="hero mt-28" data-aos="flip-down" data-aos-duration="3000">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src={statement} alt='' className="w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">MISSION <span className='text-primary'>STATEMENT!</span></h1>
                    <p className="py-6">We are a dental practice devoted to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures that result in beautiful, long lasting smiles!</p>
                    <FocusButton>GET STARTED</FocusButton>
                </div>
            </div>
        </div>
    );
};

export default Statement;