import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card h-auto w-72 ml-8 mr-8 shadow-xl" style={{ backgroundColor: "#e6e6e6" }} data-aos="zoom-in-up" data-aos-duration="3000">
            <figure className="px-10 pt-10">
                <img  src={service.img} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;

