import React, { useState } from 'react';


export default function ReservationForm1() {

  const [formData, setFormData] = useState({
    customerName: '',
    cpNumber: '',
    email: '',
    totalGuests: 0,
    kids: 0,
    adults: 0,
    seniors: 0,
    event: '',
    catering: {
      appetizers: '',
      entrees: '',
      dessert: ''
    },
    amenities: '',
    souvenirs: '',
    modeOfPayment: '',
    discount: '',
    totalBill: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

//   const handleAppetizerChange = (e) => {
//     const { value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       catering: {
//         ...prevState.catering,
//         appetizers: value
//       }
//     }));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const kidsCost = formData.kids * 160;
    const adultsCost = formData.adults * 200;
    const seniorsCost = formData.seniors * 160;

    const cateringCost = 15000;
    const amenitiesCost = 10000;
    const souvenirsCost = 2000;

    const totalCost =
      kidsCost + adultsCost + seniorsCost + cateringCost + amenitiesCost + souvenirsCost;

    setFormData(prevState => ({
      ...prevState,
      totalBill: totalCost
    }));
    console.log(formData);
  };


  

  return (
    <div className="reservation-container">
      <h1>Su Casa Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
        </label>

        <label>
          Contact Number:
          <input type="number" name="cpNumber" value={formData.cpNumber} onChange={handleChange} />
        </label>
      
        <label>
          Email:
          <input type="text" name="email" value={formData.cpNumber} onChange={handleChange} />
        </label>

        <div className="age-inputs">
            <label>
                Kids (1-17):
                <input type="number" name="kids" value={formData.kids} onChange={handleChange} />
            </label>
            <label>
                Adults (18-59):
                <input type="number" name="adults" value={formData.adults} onChange={handleChange} />
            </label>
            <label>
                Seniors (60+):
                <input type="number" name="seniors" value={formData.seniors} onChange={handleChange} />
            </label>
        </div>

        <label>
            Select Event:
            <select name="event" value={formData.event} onChange={handleChange}>
                <option value="">Select Event</option>
                <option value="Birthday Parties">Birthday Parties</option>
                <option value="Weddings">Wedding</option>
                <option value="Family Reunions">Family Reunions</option>
            </select>
        </label>



        <button type="Next">Next</button>
      </form>
    </div>
  )
}
