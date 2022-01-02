import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";
import { columnTasksSelector, columnSelector } from "./../selectors";
import { Icon } from "./Icon";
import TrashIcon from "./../images/trash-alt-solid.svg";
import PenIcon from "./../images/pen-solid.svg";
import { deleteColumn } from "./../actions";

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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 8px;
`;

const Icons = styled.div`
  display: flex;
`;

const Column = (props) => {
  const column = useSelector(columnSelector(props.columnId));
  const tasks = useSelector(columnTasksSelector(props.columnId));
  const dispatch = useDispatch();

  const deleteColumnHandler = () => {
    dispatch(deleteColumn({ columnId: column.id }));
  };

  const editColumnHandler = () => {};

  return (
    <div>
      {column ? (
        <Draggable draggableId={column.id} index={props.index}>
          {(provided) => (
            <div {...provided.draggableProps} ref={provided.innerRef}>
              <Container>
                <TitleContainer {...provided.dragHandleProps}>
                  <Title>{column.title}</Title>
                  <Icons>
                    <Icon img={PenIcon} onClick={editColumnHandler} />
                    <Icon img={TrashIcon} onClick={deleteColumnHandler} />
                  </Icons>
                </TitleContainer>
                <Droppable droppableId={column.id} type="task">
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
  );
};

export default Column;
