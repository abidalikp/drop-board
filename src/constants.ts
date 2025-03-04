import { ITask } from "./types";

export const statuses = ["todo", "progress", "completed"];

export const emptyTask: ITask = {
  id: "",
  name: "",
  status: "todo",
};

export const statusStyle = {
  todo: "bg-gray-800",
  progress: "bg-yellow-800",
  completed: "bg-green-800",
};
