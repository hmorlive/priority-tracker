/**
 * Display all tasks by priority
 */
import data from "@/app/data";
import TaskActions from "../actions/actions";
export default function AllTasks() {
  const tasks = data; //call api

  // Define a custom comparator function for sorting by priority
  function compareTasksByPriority(taskA, taskB) {
    const priorityOrder = { low: 1, medium: 2, high: 3 }; // Define the priority order

    const priorityA = priorityOrder[taskA.priority.toLowerCase()];
    const priorityB = priorityOrder[taskB.priority.toLowerCase()];

    return priorityB - priorityA;
  }

  // Sort the tasks array based on priority
  tasks.sort(compareTasksByPriority);

  /**
   * Sets task color given the priority
   * @param {*} priority - priority of task
   */
  const determineColorByPriority = (priority) => {
    switch (priority) {
      case "low":
        return "bg-blue-800";
      case "medium":
        return "bg-yellow-800";
      case "high":
        return "bg-red-800";
      default:
        return "bg-red-800";
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <section>
        <h2>No tasks to display</h2>
      </section>
    );
  }
  return (
    <section className="w-fit max-w-[90vw] p-4 mx-auto flex items-center justify-start flex-col text-sm h-[600px] max-h-[70vh] overflow-y-auto">
      {tasks.map((task, index) => (
        <div
          key={task.id || index}
          className={`shadow shadow-zinc-500 w-[400px] flex items-center my-4 rounded-sm p-4 bg-zinc-800 justify-between`}
        >
          <div className="flex flex-col w-full">
            <span>{task.name}</span>
            <div className="flex flex-col gap-4 w-full mt-2">
              <span
                className={`w-fit rounded-sm px-2 py-1 uppercase text-xs font-semibold ${determineColorByPriority(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
          </div>
          <TaskActions />
        </div>
      ))}
    </section>
  );
}
