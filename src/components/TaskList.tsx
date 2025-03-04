import { CreateTaskProps } from "./CreateTask";
import { ITask, Status } from "../types";
import { statuses } from "../constants";
import Section from "./Section";
import { getLocalTasks, saveLocalTasks } from "../helper";

const TaskList = ({ tasks, setTasks }: CreateTaskProps) => {
  const onRemoveTask = (id: string) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
    saveLocalTasks(newTasks);
  };

  const onUpdateTask = (id: string, status: Status) => {
    const task2 = getLocalTasks();

    const newTasks = task2.map((task: ITask) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });

    setTasks(newTasks);
    saveLocalTasks(newTasks);
  };

  return (
    <div className="flex flex-wrap justify-around gap-4 py-6">
      {statuses.map((status) => {
        const sectionTasks = [...tasks].filter(
          (task) => task.status === status
        );
        return (
          <Section
            key={status}
            status={status as Status}
            tasks={sectionTasks}
            onRemoveTask={onRemoveTask}
            onUpdateTask={onUpdateTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
