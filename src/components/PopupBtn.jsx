import React, { useState, useEffect } from 'react';
import './Reactcard.css'

function PopupBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    // <div className='px-2 py-2 bg-blue-500 container mx-auto mt-8 text-center'>
    //   {/* bg-blue-500 text-white  px-auto rounded */}
    //   <button onClick={openPopup} className="">
    //     Get Started
    //   </button>
    <div>
      <ul className="link-card-grid" onClick={openPopup}>
        <li className="link-card">
          <a>
          <h1>Get Started</h1>
        </a>
        </li>
    </ul>

      {isOpen && (      

        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black  bg-opacity-80">
          <div className="bg-white rounded p-6 md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Provide Your Information</h2>
            <form>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label className="block font-medium mb-1 text-gray-500" htmlFor="name">Name:</label>
                <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label className="block font-medium mb-1 text-gray-500" htmlFor="contact">Contact:</label>
                <input className="w-full p-2 border rounded" type="text" id="contact" name="contact" required />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label className="block font-medium mb-1 text-gray-500" htmlFor="email">Email:</label>
                <input className="w-full p-2 border rounded" type="text" id="email" name="email" required />
              </div>
              <div className="mb-2 flex flex-col justify-center items-start">
                <label className="block font-medium mb-1 text-gray-500" htmlFor="Organization">Organization:</label>
                <input className="w-full p-2 border rounded" type="text" id="organization" name="organization" required />
              </div>

              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Submit
                </button>
                <button onClick={closePopup} className="bg-red-500 text-white px-4 py-2 rounded">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupBtn;
