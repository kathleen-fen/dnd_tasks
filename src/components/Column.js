import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";
import { columnTasksSelector, columnSelector } from "./../selectors";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgrey;
  width: 220px;
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
  const column = useSelector(columnSelector(props.columnId));
  const tasks = useSelector(columnTasksSelector(props.columnId));
  /* if (!column) {
    return (
      <Draggable draggableId={column.id} index={props.index}>
        {(provided) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <Container>
              <Title {...provided.dragHandleProps}>{column.title}</Title>
              <Droppable droppableId={column.id} type="task">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <TaskList isDraggingOver={snapshot.isDraggingOver}>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  </div>
                )}
              </Droppable>
            </Container>
          </div>
        )}
      </Draggable>
    );
  } else return null; */
  return (
    <div>
      <div>{props.columnId}</div>
      <div>
        {column ? (
          <Draggable draggableId={column.id} index={props.index}>
            {(provided) => (
              <div {...provided.draggableProps} ref={provided.innerRef}>
                <Container>
                  <Title {...provided.dragHandleProps}>{column.title}</Title>
                  <Droppable droppableId={column.id} type="task">
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <TaskList isDraggingOver={snapshot.isDraggingOver}>
                          {tasks.map((task, index) => {
                            return task ? (
                              <Task key={task.id} task={task} index={index} />
                            ) : null;
                          })}
                          {provided.placeholder}
                        </TaskList>
                      </div>
                    )}
                  </Droppable>
                </Container>
              </div>
            )}
          </Draggable>
        ) : (
          "no column"
        )}
      </div>
    </div>
  );
  /* return (
    <Draggable draggableId={column.id} index={props.index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Container>
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskList isDraggingOver={snapshot.isDraggingOver}>
                    {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                </div>
              )}
            </Droppable>
          </Container>
        </div>
      )}
    </Draggable>
  ); */
};

export default Column;
