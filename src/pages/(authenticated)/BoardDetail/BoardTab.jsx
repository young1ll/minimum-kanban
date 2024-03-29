import { memo } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";

import Task from "./Task";
// import { Droppable } from "react-beautiful-dnd";
import Droppable from "../../../components/utils/StrictModeDroppable";

const BoardTab = ({
  name,
  status,
  openAddTask,
  openShiftTask,
  deleteTask,
  tasks,
}) => {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <Grid
          ref={provided.innerRef}
          {...provided.droppableProps}
          item
          xs={12}
          sm={4}
        >
          <Stack px={2} py={1.5} bgcolor={"background.paper"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h6" fontWeight={400}>
                {name}
              </Typography>
              <IconButton onClick={() => openAddTask(status)}>
                <AddCircleOutline fontSize="small" />
              </IconButton>
            </Stack>

            <Stack mt={2} spacing={0.5}>
              {tasks.map((task, index) => (
                <Task
                  key={task.id}
                  index={index}
                  id={task.id}
                  title={task.title}
                  deleteTask={() => deleteTask(status, task.id)}
                  openShiftTask={() => openShiftTask(status, task)}
                />
              ))}
            </Stack>
            {provided.placeholder}
          </Stack>
        </Grid>
      )}
    </Droppable>
  );
};

export default memo(BoardTab);
