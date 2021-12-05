import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "reset-css";
import styled from "styled-components";

import initialData from "./initial-data";
import Column from "./components/Column";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const [st, setSt] = useState(initialData);
  const res = st.columnOrder.map((columnId) => {
    const column = st.columns[columnId];
    const tasks = column.taskIds.map((taskId) => st.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
  const onDragEnd = (result) => {
    console.log("resulr: ", result);
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
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
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStartColumn = { ...start, taskIds: startTaskIds };

    const finishTaskIds = [...finish.taskIds];
    console.log("dra: ", draggableId);
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
    console.log("newState: ", newState);
    setSt(newState);
  };
  const onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };
  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(st.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
  };
  return (
    <Container>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        <React.Fragment>{res}</React.Fragment>
      </DragDropContext>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
