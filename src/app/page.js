"use client";
import { useEffect, useState } from "react";
import AllTasks from "./tasks/all/all";
import NewTask from "./tasks/new/new";
import { addTask, getTasks, removeTask } from "./backend/backend";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks initially when component mounts
  useEffect(() => {
    getTasks().then((tasks)=>{
      setTasks(tasks);
    });
  }, []);

  // Handle remove task
  const handleRemoveTask = (id) => {
    removeTask(id).then((tasks)=>{
      setTasks(tasks);
    });
  };

  // Handle add task
  const handleAddTask = (task) => {
    addTask(task).then((tasks)=>{
      setTasks(tasks);
    });
  };

  return (
    <div className="w-[500px] max-w-[90vh] mx-auto flex flex-col items-center justify-center">
      <AllTasks tasks={tasks} removeTask={handleRemoveTask} />
      <NewTask addTask={handleAddTask} />
    </div>
  );
}
