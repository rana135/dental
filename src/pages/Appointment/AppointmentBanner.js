import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointmentBanner from '../../assets/images/appointmentBanner.jpg'
import { format } from 'date-fns';
import appointmentBg from '../../assets/images/bg.png'

const AppointmentBanner = ({ selected, setSelected }) => {
    const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${appointmentBg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" data-aos-easing="linear"
                        data-aos-duration="1500"
                        src={appointmentBanner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <style>{css}</style>
                        <style>{`.custom-head { color: red }`}</style>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                            modifiersStyles={{
                                disabled: { fontSize: '75%' }
                            }}
                            styles={{
                                caption: { color: 'red' }
                              }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;