import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Column from "../Column";
import {
  columnOrderSelector,
  columnsSelector,
  tasksSelector,
  loadingSelector,
} from "./../../selectors";
import {
  getAllInfo,
  setLoading,
  setColumnOrder,
  setColumns,
} from "./../../actions";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = (props) => {
  const dispatch = useDispatch();
  const columnOrder = useSelector(columnOrderSelector);
  const columns = useSelector(columnsSelector);
  //const tasks = useSelector(tasksSelector);
  //const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(getAllInfo());
    dispatch(setLoading(true));
  }, [dispatch]);

  const res = columnOrder.map((columnId, index) => {
    return <Column key={columnId} index={index} columnId={columnId} />;
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
    // dispatch(setNewOrder(result));
    if (type === "column") {
      const newColumnOrder = [...columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      //set state for column order
      dispatch(setColumnOrder(newColumnOrder));

      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };

      dispatch(setColumns({ ...columns, [newColumn.id]: newColumn }));
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
      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      })
    );
  };
  const onDragStart = () => {};
  const onDragUpdate = (update) => {};
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Container>
              <React.Fragment>{res}</React.Fragment>
            </Container>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
