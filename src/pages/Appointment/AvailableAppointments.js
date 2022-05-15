import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ selected }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-xl text-center'>You picked <span className='font-bold'>{format(selected, 'PP')}.</span></p>;
            <p className='text-center'>Please Select a Service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <BookingModal selected={selected } treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointments;
