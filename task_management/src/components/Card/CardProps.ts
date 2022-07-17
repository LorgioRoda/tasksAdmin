import { Task } from "../Models/Tasks";

export interface CardProps {
    task: {
      note: string;
      id: number;
    };
    tasks: Task[];
  }