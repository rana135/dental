import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalOffice from './DentalOffice';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Statement from './Statement';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';


const home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <DentalOffice></DentalOffice>
            <Info></Info>
            <Services></Services>
            <Statement></Statement>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default home;