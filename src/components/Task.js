import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  display: flex;
`;

const Task = (props) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Container isDragging={snapshot.isDragging}>
          {props.task.content}
        </Container>
      </div>
    )}
  </Draggable>
);

export default Task;
