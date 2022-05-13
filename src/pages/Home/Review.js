import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div data-aos="zoom-in-down" data-aos-duration="3000"
                class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{review.review}</p>
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-6">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{review.name}</h2>
                            <div className='flex'>
                                <p>{review.location}</p>
                                <p className='ml-1'>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;