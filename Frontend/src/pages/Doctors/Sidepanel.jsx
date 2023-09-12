import React from "react";

const Sidepanel = () => {
  return (
    <div className=" shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-para mt-0 font-semibold ">TicketPrice</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          1000rs
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px]  font-semibold text-headingColor">
              sunday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              4:00 Am -9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px]  font-semibold text-headingColor">
              Monday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              4:00 Am -9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px]  font-semibold text-headingColor">
              friday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              4:00 Am -9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md ">Book Appointment</button>
    </div>
  );
};

export default Sidepanel;
