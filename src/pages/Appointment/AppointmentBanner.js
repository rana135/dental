import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointmentBanner from '../../assets/images/appointmentBanner.jpg'
import { format } from 'date-fns';
import appointmentBg from '../../assets/images/bg.png'

const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className='text-xl'>You picked <span className='font-bold'>{format(selected, 'PP')}.</span></p>;
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${appointmentBg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={appointmentBanner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;