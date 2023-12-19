"use client";
import { useEffect, useState } from "react";
import AllTasks from "./tasks/all/all";
import NewTask from "./tasks/new/new";
import { addTask, getTasks, removeTask } from "./backend/backend";
import Image from "next/image";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks initially when component mounts
  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  // Handle remove task
  const handleRemoveTask = (id) => {
    removeTask(id).then((tasks) => {
      setTasks(tasks);
    });
  };

  // Handle add task
  const handleAddTask = (task) => {
    addTask(task).then((tasks) => {
      setTasks(tasks);
    });
  };

  return (
    <div className="w-[250px] max-w-[90vh] mx-auto flex flex-col items-center justify-center">
      <div className="text-2xl items-center justify-center font-extrabold flex mb-2">
        <img src="/icon.png" className="py-1 border rounded-full w-16 h-16" />
        <span className="py-1 border-y w-fit pl-4 -ml-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-700">
          Priority Tracker
        </span>
      </div>
      <AllTasks tasks={tasks} removeTask={handleRemoveTask} />
      <NewTask addTask={handleAddTask} />
    </div>
  );
}
