import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Statement from './Statement';


const home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Statement></Statement>
        </div>
    );
};

export default home;