import React from 'react';
import Banner from './Banner';
import Banner1 from './Banner1/Banner1';
import ContactUs from './ContactUs';
import DentalOffice from './DentalOffice';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Statement from './Statement';
import SubscribeCard from './SubscribeCard';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';


const home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <div className='lg:mx-12'>
                <WhyChooseUs></WhyChooseUs>
                <Info></Info>
                <Services></Services>
                <Banner></Banner>
                <Statement></Statement>
                <DentalOffice></DentalOffice>
                <MakeAppointment></MakeAppointment>
                {/* <ContactUs></ContactUs> */}
                <Testimonials></Testimonials>
                <SubscribeCard></SubscribeCard>
            </div>
        </div>
    );
};

export default home;