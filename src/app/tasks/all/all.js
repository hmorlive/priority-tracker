"use client"
export default function AllTasks({ tasks, removeTask }) {
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
        return "bg-blue-600";
      case "medium":
        return "bg-yellow-600";
      case "high":
        return "bg-red-600";
      default:
        return "bg-red-600";
    }
  };

  const determineShadowColorByPriority = (priority) => {
    switch (priority) {
      case "low":
        return "shadow-blue-600";
      case "medium":
        return "shadow-yellow-600";
      case "high":
        return "shadow-red-600";
      default:
        return "shadow-red-600";
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
    <section className="w-full p-2 mx-auto flex items-center justify-start flex-col text-sm h-[350px] max-h-[60vh] overflow-y-auto">
      {tasks.map((task, index) => (
        <div
          key={task.id || index}
          className={`shadow-sm ${determineShadowColorByPriority(
            task.priority
          )} w-full flex items-center my-2 rounded-sm p-3 bg-zinc-800 justify-between`}
        >
          <div className="flex flex-row w-full gap-2 items-center">
            <span
              className={`text-white min-w-[50px] flex max-w-fit items-center justify-center rounded-sm px-1 uppercase text-xs font-semibold ${determineColorByPriority(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <span className="text-sm">{task.name}</span>
          </div>
          <button
            onClick={() => removeTask(task.id)}
            aria-label="remove task"
            className="text-zinc-500"
          >
            <div className="w-4 h-4 rounded-full border-2 border-emerald-500 hover:bg-emerald-500" />
          </button>
        </div>
      ))}
    </section>
  );
}
