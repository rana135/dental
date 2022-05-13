import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import FocusButton from '../Shared/FocusButton';
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}}
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-secondary text-xl font-bold'>APPOINTMENT</h2>
                <h1 className='text-3xl text-white mr-2'>MAKE YOUR FIRST DENTIST APPOINTMENT TODAY</h1>
                <p className='text-white mb-3 mr-2'>At The Landing Dental Spa, our goal is to provide you with a healthy smile and to make your dental experience as relaxing and comfortable as possible. We guarantee you won’t find another dental office quite like The Landing Dental Spa in the Morgantown area.</p>
                <FocusButton>GET STARTED</FocusButton>
            </div>
        </section>
    );
};

export default MakeAppointment;