export type Status = "todo" | "progress" | "completed";

export interface ITask {
  id: string;
  name: string;
  status: Status;
}
