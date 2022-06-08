import React from 'react';
import AllReview from './AllReview';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/reviews/review1.png'
import people2 from '../../assets/reviews/review2.png'
import people3 from '../../assets/reviews/review3.png'
import people4 from '../../assets/reviews/review4.png'
import people5 from '../../assets/reviews/review5.png'
import people6 from '../../assets/reviews/review6.png'
import { Link } from 'react-router-dom';

const AllReviews = ({ allReviews }) => {
    const reviews = [
        {
            "_id": 1,
            "img": people1,
            "review": "The best community doctor we have had since the time of Dr. Asley Graff.",
            "name": "Devin Walker",
            "location": "Alabama",
            "ratings": 5
        },
        {
            "_id": 2,
            "img": people2,
            "review": "One of the best dental clinic that provide the adequate treatment. Their team work is professional.",
            "name": "Matt Cromwell",
            "location": "Alaska",
            "ratings": 5
        },
        {
            "_id": 3,
            "img": people3,
            "review": "I was referred to Dr. Williams for a root canal. I had some anxiety.Great Service.",
            "name": "Jason Knill",
            "location": "Arizona",
            "ratings": 4.5
        },
        {
            "_id": 4,
            "img": people4,
            "review": "He is great with me and a great listener very pleased to have him as our family Doctor.",
            "name": "Taylor Waldon",
            "location": "Florida",
            "ratings": 5
        },
        {
            "_id": 5,
            "img": people5,
            "review": "I love they staff.Specially the Doctor so very care and professional with her career.",
            "name": "Maruf Mohanty",
            "location": "Maryland",
            "ratings": 4.5
        },
        {
            "_id": 6,
            "img": people6,
            "review": "Great doctor. I agree with the previous positive comments about his care.",
            "name": "Michelle Ames",
            "location": "california",
            "ratings": 4
        }
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary text-center'>Testimonials</h2>
                    <h1 className='text-3xl'>What Our Patience Say's</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-18' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(allReview => <AllReview
                        key={allReview._id}
                        allReview={allReview}
                    ></AllReview>)
                }
            </div>
        </section>
    );
};

export default AllReviews;