import { ReactNode, useState } from "react";
import { ITask } from "../types";
import { emptyTask } from "../constants";
import { v4 as uuidv4 } from "uuid";
import { saveLocalTasks } from "../helper";

export interface CreateTaskProps {
  tasks: ITask[];
  setTasks: (tasks: ITask[] | ((prevTasks: ITask[]) => ITask[])) => void;
}

const CreateTask = ({ tasks, setTasks }: CreateTaskProps): ReactNode => {
  const [newTask, setNewTask] = useState<ITask>({ ...emptyTask, id: uuidv4() });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveLocalTasks(updatedTasks);

    setNewTask({ ...emptyTask, id: uuidv4() });
  };

  return (
    <div className="flex flex-col gap-4 p-2 w-fit mx-auto flex-wrap">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className="border text-primary border-primary shadow rounded-lg px-3"
          placeholder="Learn Guitar"
          type="text"
          id="taskName"
          name="taskName"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <button
          className="border text-primary shadow shadow-tertiary border-primary p-2 rounded-lg cursor-pointer hover:bg-tertiary"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
