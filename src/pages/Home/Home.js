import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Statement from './Statement';
import Testimonials from './Testimonials';


const home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Statement></Statement>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default home;