import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "../Redux/NameSlice";
import { FaRegEdit } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";

const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.first);
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold text-zinc-600">
        Let's CRUD
      </h2>
      <div className=" mt-6 md:mt-12 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-[380px] lg:gap-[580px]">
        <Link
          className=" font-semibold text-2xl  p-2 rounded-md  text-white shadow-lg bg-blue-500 ease-linear transition-all delay-100 hover:bg-white border hover:border-blue-700 hover:text-blue-700 "
          to="/create"
        >
          Create +
        </Link>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="w-[240px] border border-gray-300 p-2 rounded-md outline-none"
          type="text"
          placeholder="Search here...."
        />
      </div>
      <div className="overflow-x-auto mt-3 mx-auto w-full max-w-[1000px] px-2">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700 uppercase text-sm">
              <th className="py-3 px-2 border-b border-gray-300">ID</th>
              <th className="py-3 px-2 border-b border-gray-300">Title</th>
              <th className="py-3 px-2 border-b border-gray-300">Email</th>
              <th className="py-3 px-2 border-b border-gray-300">Edits</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter(
                (contact) =>
                  contact.name.toLowerCase().includes(search.toLowerCase()) ||
                  contact.email.toLowerCase().includes(search.toLowerCase())
              )
              .map((value) => (
                <tr
                  key={value.id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="py-2 px-1 text-sm md:text-lg md:px-4 border-b border-gray-200">
                    {value.id}
                  </td>
                  <td className="py-2 px-1 text-sm md:text-lg md:px-4 border-b border-gray-200">
                    {value.name}
                  </td>
                  <td className="py-2 px-1 text-sm md:text-lg md:px-4 border-b border-gray-200">
                    {value.email}
                  </td>
                  <td className="py-2 px-1 text-sm md:text-lg md:px-4 border-b border-gray-200 flex flex-col md:flex-row gap-2">
                    <Link
                      to={`/update/${value.id}`}
                      className="w-[38px] md:w-[100%] flex justify-center text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-700 transition rounded duration-150 px-2 py-1 font-medium"
                    >
                      <FaRegEdit className="block md:hidden text-lg" />
                      <span className="hidden md:block">Update</span>
                    </Link>
                    <button
                      onClick={() => dispatch(removeContact(value.id))}
                      className="w-[38px] md:w-[100%] text-red-600 hover:text-white flex justify-center hover:bg-red-500 border border-red-500 px-2 py-1 rounded transition duration-150"
                    >
                      <CiSquareRemove className="block  md:hidden text-xl" />
                      <span className="hidden md:block">Remove</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
