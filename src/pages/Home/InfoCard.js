import React from 'react';

const InfoCard = ({img, cardTitle, cardBOdy, bgClass}) => {
    return (
        <div className={`rounded-3xl mt-24 shadow-xl ${bgClass}`}>
            <figure className='pl-3 flex justify-center mt-4'>
                <img className='w-16' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white text-center">
                <h1 className="font-bold text-2xl">{cardTitle}</h1>
                <p>{cardBOdy}</p>
            </div>
        </div>
    );
};

export default InfoCard;