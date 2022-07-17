import { deleteTask } from "../../services/tasks";
import { CardProps } from "./CardProps";
import { useAppState } from "../../context/AppContext";
import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import EditCard from "../EditCard/EditCard";


export function Card(props: CardProps) {
  const { task } = props;
  const { requestTasks } = useAppState();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleDelete = (taskId: number) => {
    deleteTask(taskId)
      .then(() => {
        requestTasks();
      })
      .catch((e) => console.log("error", e));
  };

  const closeEditModal = () => {
    setOpenModal(false);
  };

  const renderEditModal = () => {
    return (
      <EditCard
        open={openModal}
        handleClose={closeEditModal}
        id={task.id}
        note={task.note}
      />
    );
  };

  return (
    <div className="flex justify-center m-2 md: mr-5">
      <Paper className="flex justify-center mt-5 p-4 md:" elevation={3}>
        <TextField size="medium" value={task.note}></TextField>
        <div className="ml-2">
          <Button size="small" onClick={() => setOpenModal(true)} color="info">
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleDelete(task.id)}
            color="error"
          >
            Delete
          </Button>
        </div>
      </Paper>
      {renderEditModal()}
    </div>
  );
}
