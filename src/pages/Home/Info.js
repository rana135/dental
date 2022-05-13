import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5' data-aos="flip-up" data-aos-duration="3000">
            <InfoCard cardTitle='Opening Hours' cardBOdy='Saturday TO Friday 8.00AM - 7.00PM' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>

            <InfoCard cardTitle='Visit Our Location' cardBOdy='USA, California 20, First Avenue, California' bgClass='bg-accent' img={marker}></InfoCard>

            <InfoCard cardTitle='Contact Us' cardBOdy='Tel: +7 998 71 150 0
            Fax: +7 998 71 150' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};
export default Info;