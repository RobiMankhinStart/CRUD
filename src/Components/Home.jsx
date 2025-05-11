import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "../Redux/NameSlice";

const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.first);
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold text-zinc-600">
        Let's CRUD
      </h2>
      <Link
        className="ml-[460px] font-semibold text-2xl mt-12 p-2 rounded-md flex w-[200px] justify-center text-white shadow-lg bg-blue-500 ease-linear transition-all delay-100 hover:bg-white border hover:border-blue-700 hover:text-blue-700 "
        to="/create"
      >
        Create +
      </Link>
      <table className="mt-3 mx-auto min-w-[600px] border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left text-gray-700 uppercase text-sm">
            <th className="py-3 px-4 border-b border-gray-300">ID</th>
            <th className="py-3 px-4 border-b border-gray-300">Title</th>
            <th className="py-3 px-4 border-b border-gray-300">Email</th>
            <th className="py-3 px-4 border-b border-gray-300">Edits</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((value) => (
            <tr
              key={value.id}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="py-2 px-4 border-b border-gray-200">{value.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {value.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {value.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 flex gap-2">
                <Link
                  to="/update"
                  className="text-blue-700  hover:bg-blue-600 hover:text-white border border-blue-700 transition rounded duration-150 px-2 py-1 font-medium"
                >
                  Update
                </Link>
                <button
                  onClick={() => dispatch(removeContact(value.id))}
                  className="text-red-600 hover:text-white hover:bg-red-500 border border-red-500 px-2 py-1 rounded transition duration-150"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
