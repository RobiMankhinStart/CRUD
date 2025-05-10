import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const contacts = useSelector((state) => state.first);
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold text-zinc-600">
        Let's CRUD
      </h2>
      <table className="mt-6 mx-auto min-w-[600px] border border-gray-300 shadow-md rounded-lg overflow-hidden">
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
              className="hover:bg-gray-50 transition-colors duration-200"
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
                <button className="text-red-600 hover:text-white hover:bg-red-500 border border-red-500 px-2 py-1 rounded transition duration-150">
                  Delete
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
