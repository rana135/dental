import React from 'react';

const AllReview = ({allReview}) => {
    return (
        <div>
            <div data-aos="zoom-in-down" data-aos-duration="3000"
                className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{allReview.review}</p>
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-2">
                                <img src={allReview.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{allReview.name}</h2>
                            <div className='flex'>
                                <p>{allReview.location}</p>
                                <p className='ml-1'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;