import { useState } from "react";
import { useAppState } from "../../context/AppContext";
import { createTask } from "../../services/tasks";
import { Button, Paper, TextField } from "@mui/material";

export const CreateTask = () => {
  const [task, setTask] = useState({
    note: "",
  });
  const { requestTasks } = useAppState();

  const clearState = () => {
    setTask({
      note: "",
    });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, note: event.target.value });
  };

  const createNewTask = () => {
    createTask(task)
      .then(() => {
        requestTasks();
      })
      .catch((e) => console.log(e))
      .finally(() => clearState());
  };

  return (
    <Paper className="flex-col m-2 p-3 md: max-h-32 mt-7">
      <h3 className="text-center">Create Task</h3>
      <div className="flex justify-center mt-2">
        <TextField
          placeholder="Write your task here..."
          id="note"
          value={task.note}
          onChange={onInputChange}
        ></TextField>
        <Button size="small" color="success" onClick={createNewTask}>
          New Task
        </Button>
      </div>
    </Paper>
  );
};
