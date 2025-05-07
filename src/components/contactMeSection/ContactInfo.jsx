import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="juniorsilvano242@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+238 5975161" Image={FiPhone} />
      <SingleInfo text="Mindelo, Cape Verd" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
