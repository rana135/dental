import React from 'react';
import statement from '../../assets/images/about.webp'

const Statement = () => {
    return (
        <div class="hero min-h-screen mx-4">
            <div class="hero-content flex-col lg:flex-row gap-12">
                <img src={statement} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold ">MISSION <span className='text-primary'>STATEMENT!</span></h1>
                    <p class="py-6">We are a dental practice devoted to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures that result in beautiful, long lasting smiles!</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Statement;