import { createContext, useContext } from "react";
import { Task } from "../components/Models/Tasks";

interface AppState {
  tasks: Task[];
  requestTasks: () => void;
  setTasks: (tasks: Task[]) => void;
}

export const AppContext = createContext<AppState>({} as any);
export const useAppState = () => useContext(AppContext);
