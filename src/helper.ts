import { ITask } from "./types";

export const getLocalTasks = () => {
  return JSON.parse(localStorage.getItem("ab-tasks") || "[]");
};

export const saveLocalTasks = (tasks: ITask[]) => {
  localStorage.setItem("ab-tasks", JSON.stringify(tasks));
};

export const isTouchDevice =
  "ontouchstart" in window || navigator.maxTouchPoints > 0;
