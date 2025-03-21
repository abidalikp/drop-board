import { useEffect, useRef } from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { ITask, Status } from "../types";
import { statusStyle } from "../constants";

interface SectionProps {
  status: Status;
  tasks: ITask[];
  onRemoveTask: (id: string) => void;
  onUpdateTask: (id: string, status: Status) => void;
}

const Section = ({
  status,
  tasks,
  onRemoveTask,
  onUpdateTask,
}: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: "task",
      drop: (item: { id: string }) => {
        onUpdateTask(item.id, status);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  useEffect(() => {
    if (ref.current) {
      dropRef(ref.current);
    }
  }, [dropRef]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 p-2 w-[322px] rounded-lg ${
        isOver ? "bg-tertiary" : ""
      }`}
    >
      <h1
        className={`capitalize flex gap-2 text-white p-2 rounded-lg items-center justify-center ${statusStyle[status]}`}
      >
        {status}
        <div className="flex items-center justify-center w-6 h-6 bg-white text-black rounded-full">
          {tasks.length}
        </div>
      </h1>
      <ul className="flex flex-col gap-2 ">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onRemoveTask={onRemoveTask} />
        ))}
      </ul>
    </div>
  );
};

export default Section;
