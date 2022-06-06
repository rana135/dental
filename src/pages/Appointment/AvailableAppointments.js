import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(selected, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://fierce-beach-54494.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>Available Appointments on {format(selected, 'PP')}.</p>;
    }

    return (
        <div>
            <p data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-xl text-center'><span className='font-bold'>{footer}</span></p>;
            <p className='text-center'>Please Select a Service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <BookingModal refetch={refetch} selected={selected} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointments;
