import { Link } from "react-router-dom";

export default function End() {
  return (
    <div style={{ fontFamily: "Poppins" }} className='mb-4'>
      <div
        className=' w-11/12 m-auto hidden md:block bg-gray-200 '
        style={{ height: "2px" }}
      />
      <div className='flex w-11/12 m-auto  items-center justify-between'>
        <Link to='/'>
          {" "}
          <p className='text-xl md:text-xl pt-8  text-gray-400 hover:text-blue-400'>
            Mages Studio Pvt Ltd
          </p>
        </Link>
        <span
          className='md:flex hidden items-center pt-8  text-gray-400 justify-between'
          style={{ fontFamily: "Poppins" }}>
          <p className='mx-2 hover:text-blue-400'>Cookies </p>
          <p className='mx-2 hover:text-blue-400'> Privacy and Policies</p>
        </span>
      </div>
    </div>
  );
}
