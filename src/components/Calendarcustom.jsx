import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendarcustom = ({ onSelectDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date) => {
    onSelectDate(date);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get a free demo
      </button>

      {isOpen && (
        <div className="calendar-popup">
          <Calendar onChange={handleDateSelect} />
        </div>
      )}
    </div>
  );
};

export default Calendarcustom;
