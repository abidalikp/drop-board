import { useEffect, useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import { ITask } from "./types";
import TaskList from "./components/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getLocalTasks } from "./helper";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setTasks(getLocalTasks());
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="pb-10 md:text-7xl text-7xl font-semibold font-serif">
        Drop Board
      </div>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </DndProvider>
  );
}

export default App;
