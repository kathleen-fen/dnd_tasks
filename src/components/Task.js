import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { Icon } from "./Icon";
import TrashIcon from "./../images/trash-alt-solid.svg";
import PenIcon from "./../images/pen-solid.svg";
import { deleteTask } from "./../actions";

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  display: flex;
  justify-content: space-between;
`;
const Icons = styled.div`
  display: flex;
`;

const Task = (props) => {
  const dispatch = useDispatch();
  const deleteTaskHandler = () => {
    console.log("id: ", props.task.id);
    console.log("index: ", props.index);
    dispatch(
      deleteTask({
        columnId: props.columnId,
        taskId: props.task.id,
        taskIndex: props.index,
      })
    );
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container isDragging={snapshot.isDragging}>
            <div>{props.task.content}</div>
            <Icons>
              <Icon img={PenIcon} />
              <Icon img={TrashIcon} onClick={deleteTaskHandler} />
            </Icons>
          </Container>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
