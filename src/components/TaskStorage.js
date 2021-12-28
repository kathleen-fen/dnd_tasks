import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import { setAddMode } from "./../actions";

import Task from "./Task";
import { columnTasksSelector, columnSelector } from "./../selectors";
const ContainerWrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
  width: 100%;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
`;

const TaskStorage = (props) => {
  const column = useSelector(columnSelector(props.columnId));
  const tasks = useSelector(columnTasksSelector(props.columnId));
  const dispatch = useDispatch();

  return (
    <ContainerWrapper>
      {column ? (
        <Container>
          <Title>{column.title}</Title>
          <Droppable droppableId={column.id} type="task" direction="horizontal">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TaskList isDraggingOver={snapshot.isDraggingOver}>
                  {tasks.map((task, index) => {
                    return task ? (
                      <Task
                        key={task.id}
                        task={task}
                        index={index}
                        columnId={props.columnId}
                      />
                    ) : null;
                  })}
                  {provided.placeholder}
                </TaskList>
                <button onClick={() => dispatch(setAddMode(true))}>
                  Add new
                </button>
              </div>
            )}
          </Droppable>
        </Container>
      ) : (
        "no column"
      )}
    </ContainerWrapper>
  );
};

export default TaskStorage;
