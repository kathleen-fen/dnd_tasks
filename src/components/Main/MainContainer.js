import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import CssBaseline from "@mui/material/CssBaseline";

import { AppContainer } from "./UI";
import Column from "../Column";
import {
  columnOrderSelector,
  columnsSelector,
  loadingSelector,
  authDataSelector,
} from "./../../selectors";
import { getAllInfo, updateColumnOrder, updateColumns } from "./../../actions";
import { AddColumn } from "../AddColumn/AddColumn";
import { InitialColumnId } from "../../settings";
import TaskStorage from "../TaskStorage";
import { Loader } from "../Loader/Loader";
import { Confirm } from "./../Confirm";
import { users } from "../../users";
import { Header } from "../Header";

export const MainContainer = (props) => {
  const dispatch = useDispatch();
  const columnOrder = useSelector(columnOrderSelector);
  const columns = useSelector(columnsSelector);
  const loading = useSelector(loadingSelector);
  const authData = useSelector(authDataSelector);
  const isAdmin =
    authData.user && users[authData.user] && users[authData.user].admin;

  useEffect(() => {
    dispatch(getAllInfo());
  }, [dispatch]);

  const res = columnOrder.map((columnId, index) => {
    return columnId !== InitialColumnId ? (
      <Column
        key={columnId}
        index={index}
        columnId={columnId}
        isAdmin={isAdmin}
      />
    ) : null;
  });
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //todo: to set loading here
    if (type === "column") {
      const newColumnOrder = [...columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      //set state for column order
      dispatch(updateColumnOrder(newColumnOrder));

      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };

      dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
      return;
    }
    //moving from one list to another
    const startTaskIds = start.taskIds ? [...start.taskIds] : [];
    startTaskIds.splice(source.index, 1);
    const newStartColumn = { ...start, taskIds: startTaskIds };

    const finishTaskIds = finish.taskIds ? [...finish.taskIds] : [];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = { ...finish, taskIds: finishTaskIds };

    dispatch(
      updateColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      })
    );
  };
  const onDragStart = () => {};
  const onDragUpdate = (update) => {};
  return (
    <React.Fragment>
      <Header />

      {loading ? <Loader /> : null}
      <AddColumn />
      <Confirm />
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <CssBaseline />
              <AppContainer maxWidth="xl">
                <React.Fragment>
                  {isAdmin ? (
                    <TaskStorage isAdmin={isAdmin} columnId={InitialColumnId} />
                  ) : null}
                  {res}
                </React.Fragment>
              </AppContainer>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
};
