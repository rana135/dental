import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, selected, setTreatment, refetch}) => {
    const [user] = useAuthState(auth);
    const formattedDate = format(selected, 'PP')
    const { _id, name, slots } = treatment;
    
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name, _id);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch("http://localhost:5000/booking",{
            method:"POST",
            headers:{
                "content-type":'application/json',
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTreatment(null);
            refetch();
            if(data.success){
                toast(`Appointment is set ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment ${data.booking?.date} at 
                ${data.booking?.slot}`)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">❌</label>
                    <h3 className="font-bold text-lg text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
                        <input type="text" value={format(selected, 'PP')} className="input input-bordered input-info w-full max-w-xs" disabled readOnly />
                        <select name="slot" className="select select-primary w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user.displayName} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" disabled value={user.email} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" className="input input-bordered input-info w-full max-w-xs bg-gradient-to-r from-secondary to-primary text-white font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;