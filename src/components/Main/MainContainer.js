import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import axios from "axios";
import styled from "styled-components";

import { defaultState } from "../../defaultState";
import initialData from "./../../initial-data";
import Column from "../Column";
import {
  columnOrderSelector,
  columnsSelector,
  tasksSelector,
  loadingSelector,
} from "./../../selectors";
import { getAllInfo, setLoading } from "./../../actions";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContainer = (props) => {
  const dispatch = useDispatch();
  const columnOrder = useSelector(columnOrderSelector);
  const columns = useSelector(columnsSelector);
  const tasks = useSelector(tasksSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(getAllInfo());
    dispatch(setLoading(true));
    axios
      .get("https://tasks-2df6f-default-rtdb.firebaseio.com/state.json")
      .then((res) => {
        console.log("red: ", res.data);
        setSt(res.data);
      });
  }, []);
  useEffect(() => {
    console.log("columnOrder: ", columnOrder);
    console.log("columns: ", columns);
    console.log("taks: ", tasks);
  }, [columnOrder, tasks, columns]);

  //  const columnOrder = useSelector(columnOrderSelector());
  //console.log("columns: ", columns);
  const [st, setSt] = useState(initialData);
  const res = columnOrder.map((columnId, index) => {
    //  const column = st.columns[columnId];
    /*  let tasks = [];
    if (column.taskIds) {
      tasks = column.taskIds.map((taskId) => st.tasks[taskId]);
    } */
    return <Column key={columnId} index={index} columnId={columnId} />;
    //return <div></div>;
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

    if (type === "column") {
      const newColumnOrder = [...st.columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = { ...st, columnOrder: newColumnOrder };
      setSt(newState);
      return;
    }

    const start = st.columns[source.droppableId];
    const finish = st.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };
      const newState = {
        ...st,
        columns: { ...st.columns, [newColumn.id]: newColumn },
      };
      setSt(newState);
      return;
    }
    //moving from one list to another
    const startTaskIds = start.taskIds ? [...start.taskIds] : [];
    startTaskIds.splice(source.index, 1);
    const newStartColumn = { ...start, taskIds: startTaskIds };

    const finishTaskIds = finish.taskIds ? [...finish.taskIds] : [];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = { ...finish, taskIds: finishTaskIds };

    const newState = {
      ...st,
      columns: {
        ...st.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    setSt(newState);
  };
  const onDragStart = () => {};
  const onDragUpdate = (update) => {};
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      {columnOrder.length ? columnOrder[0] : "false"}
      {columns["column-1"] ? columns["column-1"].title : "false"}
      {tasks.task1 ? tasks.task1["content"] : "false"}
      {"loading: " + loading}
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
