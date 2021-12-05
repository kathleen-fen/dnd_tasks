import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
  width: 30%;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = (props) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TaskList isDraggingOver={snapshot.isDraggingOver}>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
