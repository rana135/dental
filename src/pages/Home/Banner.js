import React from 'react';
import dentist1 from '../../assets/images/dentist1.jpg'
import FocusButton from '../Shared/FocusButton';


const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse mt-20">
                    <img data-aos="fade-left" data-aos-duration="3000" src={dentist1} alt='' className=" rounded-lg shadow-2xl lg:h-80 lg:w-full sm:h-32" />
                    <div data-aos="fade-right" data-aos-duration="3000">
                        <h1 className="text-4xl font-bold">
                            Friendly Gentle <br/> Dentist
                        </h1>
                        <p className="py-6">Our number one goal is to make sure every one of our patients leaves 100% happy and with a bright, white smile on their face! A better life starts with a beautiful smile.We built The Denta Care® to provide a completely new experience, different from the traditional dentistʼs office anywhere on the continent: a beautiful boutique, virtual appointments, the latest in 3D technology, and world-class specialists. We aim to get you to the best version of you!</p>
                        <FocusButton>GET STARTED</FocusButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;