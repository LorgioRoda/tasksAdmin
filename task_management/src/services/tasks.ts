import axios from "axios";
import { Task } from "../components/Models/Tasks";

const API_URL = "http://localhost:3006";

interface NewTask {
  note: string;
}

export const getTasks = () => {
  return axios.get(`${API_URL}/task`);
};

export const deleteTask = (id: number) => {
  return axios.delete(`${API_URL}/task/${id}`);
};

export const updateTask = (task: Task) => {
  return axios.put(`${API_URL}/task/${task.id}`, task);
};

export const createTask = (task: NewTask) => {
  return axios.post(`${API_URL}/task`, task);
};
