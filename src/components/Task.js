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
const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 2px;
  margin-right: 8px;
`;

const Task = (props) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps}>
        <Container isDragging={snapshot.isDragging}>
          <Handle {...provided.dragHandleProps} />
          {props.task.content}
        </Container>
      </div>
    )}
  </Draggable>
);

export default Task;
