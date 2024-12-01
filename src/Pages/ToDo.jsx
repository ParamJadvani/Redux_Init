import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../Redux/Action.js";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoApp = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(toggleTodo(id)); // Use toggle to mark as completed
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 480,
        mx: "auto",
        p: 2,
        mt: 5,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "white",
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        ToDo App
      </Typography>

      {/* Input Field */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </Box>

      {/* Task List */}
      <Typography variant="h6" gutterBottom>
        Missing Tasks
      </Typography>
      <List>
        {todos
          .filter((todo) => !todo.completed) // Filter out incomplete tasks
          .map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={() => handleMarkAsDone(todo.id)}
                  >
                    Done
                  </Button>
                  <IconButton
                    edge="end"
                    color="error"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <Typography sx={{ flexGrow: 1 }}>
                {todo.task} <Chip label="Missing" color="warning" />
              </Typography>
            </ListItem>
          ))}
      </List>

      {/* Completed Tasks List */}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Completed Tasks
      </Typography>
      <List>
        {todos
          .filter((todo) => todo.completed) // Filter out completed tasks
          .map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => handleDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Typography
                sx={{
                  textDecoration: "line-through",
                  flexGrow: 1,
                  color: "gray",
                }}
              >
                {todo.task}
              </Typography>
              <Chip label="Completed" color="success" />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ToDoApp;
