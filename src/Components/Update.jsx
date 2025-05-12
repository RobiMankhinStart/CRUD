import React, { useState } from "react";
import { UpdateContact } from "../Redux/NameSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const contact = useSelector((item) => item.first);
  const navigate = useNavigate();

  const CurrentContact = contact.find((item) => item.id == id);
  const dispatch = useDispatch();
  const [name, setName] = useState(CurrentContact ? CurrentContact.name : "");
  const [email, setEmail] = useState(
    CurrentContact ? CurrentContact.email : ""
  );
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    dispatch(UpdateContact({ id, name, email }));
    navigate("/");
  };
  return (
    <div className="bg-yellow-600 h-screen p-1">
      <h2 className=" mt-8 md:mt-[100px] pb-2 border-4 border-yellow-600 w-[250px] mx-auto border-b-gray-300 text-center text-3xl font-bold text-white">
        Update
      </h2>
      <h3 className="mt-6 border-4 w-[250px] border-yellow-600 mx-auto text-center text-3xl font-bold text-white">
        ID : {id}
      </h3>
      <form
        onSubmit={handleUpdate}
        className="bg-yellow-400  mt-4 p-8 md:w-[450px] rounded-xl mx-auto shadow-lg flex flex-col gap-8 justify-center items-center"
      >
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
          <label className="text-lg font-semibold text-gray-700" htmlFor="name">
            Name :
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[260px] p-2 rounded-md outline-none"
            name="name"
            type="text"
            placeholder="Enter Name...."
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
          <label
            className="text-lg  font-semibold text-gray-700"
            htmlFor="email"
          >
            Email :
          </label>
          <input
            className="w-[260px] p-2 rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter Email..."
          />
        </div>
        <button className="group text-2xl font-bold relative w-[9em] h-[3em] text-[15px] font-sans rounded-full border-none overflow-hidden shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#e0e0e0] bg-white text-yellow-800 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-500 before:transition-all before:duration-[.4s]  before:ease-in before:z-0 hover:before:w-full">
          <span className="relative z-10 flex justify-center gap-[1px] transition-colors duration-700 delay-200 group-hover:text-white">
            {"Update".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block transition-colors duration-700 delay-[calc(50ms*var(--i))]"
                style={{ "--i": index }}
              >
                {char}
              </span>
            ))}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Update;
