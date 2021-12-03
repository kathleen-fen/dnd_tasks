import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: white;
`;

const Task = (props) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}
      >
        <Container>{props.task.content}</Container>
      </div>
    )}
  </Draggable>
);

export default Task;
