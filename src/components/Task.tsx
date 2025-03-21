import { useEffect, useRef } from "react";
import { ITask } from "../types";
import { useDrag } from "react-dnd";
import RemoveIcon from "../assets/Remove";
import { isTouchDevice } from "../helper";

interface TaskProps {
  task: ITask;
  onRemoveTask: (id: string) => void;
}

const Task = ({ task, onRemoveTask }: TaskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "task",
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  useEffect(() => {
    if (ref.current) {
      dragRef(ref.current);
    }
  }, [dragRef]);

  return (
    <div
      ref={ref}
      className={`flex group/item gap-2 justify-between text-primary items-center shadow shadow-shadow hover:bg-tertiary border border-tertiary cursor-pointer px-4 py-2 rounded-lg ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="overflow-hidden text-left">{task.name}</div>
      <div
        className={`group-hover/item:visible ${
          isTouchDevice ? "visible" : "invisible"
        }`}
        onClick={() => {
          onRemoveTask(task.id);
        }}
      >
        <RemoveIcon />
      </div>
    </div>
  );
};

export default Task;
