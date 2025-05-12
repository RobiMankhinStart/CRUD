import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-red-500 pt-[100px] h-screen flex flex-col items-center gap-5">
      <h2 className=" text-2xl font-bold text-white"> Page Not Found</h2>
      <Link
        to={"/"}
        className="group text-2xl font-bold relative w-[9em] h-[35px] text-[15px] font-sans rounded-md border-none overflow-hidden shadow-[6px_6px_12px_#5ee65e,-6px_-6px_12px_#5ee65e] bg-white text-yellow-600 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-md before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-500 before:transition-all before:duration-[.4s]  before:ease-in before:z-0 hover:before:w-full"
      >
        <span className="relative z-10 flex justify-center gap-[1px] transition-colors duration-700 delay-200 group-hover:text-white">
          {"Back To Home".split("").map((char, index) => (
            <span
              className="inline-block transition-colors duration-700 delay-[calc(50ms*var(--i))]"
              style={{ "--i": index }}
            >
              {char}
            </span>
          ))}
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
