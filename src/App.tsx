import { useEffect, useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import { ITask } from "./types";
import TaskList from "./components/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getLocalTasks } from "./helper";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setTasks(getLocalTasks());
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col w-full bg-secondary min-h-screen">
        <div className="flex-grow">
          <Header />
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;
