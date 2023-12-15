import AllTasks from "./tasks/all/all";
import NewTask from "./tasks/new/new";

export default function HomePage () {
  return (
    <div className="w-[500px] max-w-[90vh] mx-auto flex flex-col items-center justify-center">
      <AllTasks />
      <NewTask />
    </div>
  )
}