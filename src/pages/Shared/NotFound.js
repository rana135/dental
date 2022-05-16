import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.gif'
import FocusButton from './FocusButton';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <div className='flex justify-center'>
                <FocusButton><Link to='/'>Go Back Home</Link></FocusButton>
            </div>
        </div>
    );
};

export default NotFound;