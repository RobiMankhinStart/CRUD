import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../Redux/NameSlice";
const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    else if (email.trim() === "") return;
    dispatch(addContact({ name, email }));
    navigate("/");
  };
  return (
    <div className="bg-slate-200 h-screen p-1">
      <h2 className="mt-[100px] pb-2 border-4 w-[250px] mx-auto border-b-gray-500 text-center text-3xl font-bold text-zinc-600">
        Creation
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-300 mt-10 p-8 w-[450px] rounded-xl mx-auto shadow-lg flex flex-col gap-8 justify-center items-center"
      >
        <div className="flex gap-2 items-center">
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
        <div className="flex gap-2 items-center">
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
        <button className="group text-2xl font-bold relative w-[9em] h-[3em] text-[15px] font-sans rounded-full border-none overflow-hidden shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#e0e0e0] bg-white text-blue-700 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-gradient-to-r before:from-blue-400 before:to-blue-500 before:transition-all before:duration-[.4s]  before:ease-in before:z-0 hover:before:w-full">
          <span className="relative z-10 flex justify-center gap-[1px] transition-colors duration-700 delay-200 group-hover:text-white">
            {"ADD".split("").map((char, index) => (
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

export default Create;
