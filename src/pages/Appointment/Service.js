import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div data-aos="zoom-in-down" data-aos-duration="3000"
         className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="font-bold text-xl text-center  text-secondary">{name}</h2>
                <p className="text-center">{slots.length ? slots[0] : <p className='text-red-500'>Try Another Date</p>}</p>
                <p className="text-center">{slots.length} {slots.length > 1 ? "slots" : "slot"} available</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatment(service)}
                    for="booking-modal" disabled={slots.length === 0} className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;