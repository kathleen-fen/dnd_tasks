import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = (props) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TaskList>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
            </TaskList>
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
