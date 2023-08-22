// import React from 'react';
// import Calendarcustom from './Calendarcustom';

// const Calendarimport = () => {
//   const handleDateSelect = (date) => {
//     // console.log('Selected date:', date);
//     // You can perform further actions with the selected date
//   };

//   return (
//     <div className="container mx-auto mt-8 text-center">
//       {/* <h1 className="text-3xl font-semibold mb-4">Appointment Booking</h1> */}
//       <Calendarcustom onSelectDate={handleDateSelect} />
//     </div>
//   );
// };

// export default Calendarimport;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Calendarimport = () => {
  const [value, setValue] = useState("");

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDay = `${year}-${month}-${day}`;

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value)
  };

  return (
    <div style={{ margin: "auto", marginTop: "50px", width: "300px" }}>
      <h2>React Date Picker</h2>
      <Form.Control
        type="date"
        name="datepicker"
        value={value}
        min={currentDay}
        onChange={handleChange}
      />
    </div>
  );
};

export default Calendarimport;