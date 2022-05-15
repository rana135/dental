import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = (event)=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name, _id);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">❌</label>
                    <h3 className="font-bold text-lg text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
                        <input type="text" value={format(selected, 'PP')} className="input input-bordered input-info w-full max-w-xs" disabled readOnly />
                        <select name="slot" class="select select-primary w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" className="input input-bordered input-info w-full max-w-xs bg-gradient-to-r from-secondary to-primary text-white font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;