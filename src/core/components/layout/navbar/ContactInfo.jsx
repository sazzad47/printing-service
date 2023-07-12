import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full h-[5vh] flex items-center justify-center text-gray-200 bg-fuchsia-900">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <BiSolidPhoneCall/>
          +8800000000000
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineMail/>
           example@gmail.com
        </div>
        <div className="flex gap-2 items-center">
          <MdLocationPin/>
            Jahangirnagar University, Savar, Dhaka-1342
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
