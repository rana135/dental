import React from 'react';

const Service = ({ service }) => {
    return (
        <div class="card lg:max-w-lg shadow-xl" style={{backgroundColor:"#e6e6e6"}}  data-aos="zoom-in-up" data-aos-duration="3000">
            <figure class="px-10 pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;