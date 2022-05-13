import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades.",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food.",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth.",
            img: whitening,
        },
    ]
    return (
        <div className='mt-28'>
            <div className='text-center mb-5'>
                <h3 className='text-primary text-2xl font-bold'>Our Services</h3>
                <h1 className='text-4xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 text-center'>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;