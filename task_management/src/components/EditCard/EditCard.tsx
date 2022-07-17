import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";
import { useAppState } from "../../context/AppContext";
import { updateTask } from "../../services/tasks";
import { EditCardProps } from "./EditCardProps";

export const EditCard = (props: EditCardProps) => {
  const { note, id, open, handleClose } = props;
  const [task, setTask] = useState(() => ({
    id: id,
    note: note,
  }));
  const { requestTasks } = useAppState();

  const onTextfieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  };

  const saveData = () => {
    updateTask(task)
      .then(() => {
        handleClose();
        requestTasks();
      })
      .catch((e) => console.log("error", e));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>EditCard</DialogTitle>
      <DialogContent className="flex">
        <TextField
          variant="filled"
          value={task.note}
          id="note"
          onChange={onTextfieldChange}
        />
        <Button size="small" color="success" onClick={saveData}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditCard;
