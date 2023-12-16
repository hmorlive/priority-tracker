"use client"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NewTask() {
  const [task, setTask] = useState({});

  return (
    <form className="w-full flex  mt-4 gap-2 items-center justify-center p-2">
      <div className="w-full relative">
        <input
          type="text"
          maxLength={200}
          className=" pl-10 bg-transparent border focus:shadow focus:border-none hover:shadow hover:shadow-emerald-500 border-zinc-700 outline-none shadow-zinc-200 focus:shadow-emerald-500 text-base rounded-md w-full px-2 py-1"
        />
      </div>
      <button
        type="submit"
        aria-label="Create Task"
        className="text-zinc-200 bg-transparent border-none px-3 py-2 text-2xl rounded-md"
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </form>
  );
}
