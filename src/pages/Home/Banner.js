import React from 'react';
import dentist1 from '../../assets/images/dentist1.jpg'
import FocusButton from '../Shared/FocusButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dentist1}  alt='' className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">Friendly Gentle <span style={{color:"#3065b5"}}>Dentist</span></h1>
                        <p className="py-6">Our number one goal is to make sure every one of our patients leaves 100% happy and with a bright, white smile on their face!</p>
                        <FocusButton>GET STARTED</FocusButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;