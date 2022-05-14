import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointment;