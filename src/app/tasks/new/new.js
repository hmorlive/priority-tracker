"use client";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NewTask({ addTask }) {
  const [task, setTask] = useState({}); // Define the task state

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.priority) return;
    addTask(task);
    setTask({});
  };

  //set priority
  const setPriority = (priority) => {
    setTask({ ...task, priority: priority });
  };

  //handle change
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Determine the color of the task based on the priority
  const determineColorByPriority = (priority) => {
    switch (priority) {
      case "low":
        return "bg-blue-600";
      case "medium":
        return "bg-yellow-600";
      case "high":
        return "bg-red-600";
      default:
        return "bg-red-600";
    }
  };

  return (
    <form
      className="w-full flex  mt-4 gap-2 items-center justify-center p-2"
      onSubmit={handleSubmit}
    >
      <div className="w-full relative">
        <input
          type="text"
          maxLength={200}
          onChange={handleChange}
          name="name"
          value={task.name || ""}
          className=" pl-10 bg-transparent border focus:shadow focus:border-none hover:shadow hover:shadow-emerald-500 border-zinc-700 outline-none shadow-zinc-200 focus:shadow-emerald-500 text-base rounded-md w-full px-2 py-1"
        />
        <div className="absolute left-0 top-0 h-full w-fit flex items-center hover:items-start justify-center pl-2 hover:pointer group">
          <span
            className={`flex w-4 h-4 ${
              task.priority
                ? determineColorByPriority(task.priority)
                : "border-2 border-zinc-500"
            } rounded-full`}
          ></span>
          <ul
            className={`h-full absolute left-0 hidden group-focus:flex group-hover:flex gap-2 bg-zinc-800 rounded-md shadow-md p-2`}
          >
            <li
              className="flex items-center gap-2"
              aria-label="select low priority"
              tabIndex={0}
              onClick={() => setPriority("low")}
              role="button"
            >
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            </li>
            <li
              className="flex items-center gap-2"
              aria-label="select medium priority"
              tabIndex={0}
              onClick={() => setPriority("medium")}
              role="button"
            >
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
            </li>
            <li
              className="flex items-center gap-2"
              aria-label="select high priority"
              tabIndex={0}
              onClick={() => setPriority("high")}
              role="button"
            >
              <span className="w-4 h-4 bg-red-500 rounded-full hover:cursor-pointer"></span>
            </li>
          </ul>
        </div>
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
