import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { Icon } from "./Icon";
import TrashIcon from "./../images/trash-alt-solid.svg";
import PenIcon from "./../images/pen-solid.svg";
import { deleteTask, editTask } from "./../actions";
import { Input } from "./Input";

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
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const deleteTaskHandler = () => {
    dispatch(
      deleteTask({
        columnId: props.columnId,
        taskId: props.task.id,
        taskIndex: props.index,
      })
    );
  };
  const changeContentHandler = (e) => {
    setNewName(e.target.value);
  };
  const onBlurHandler = (e) => {
    setEditMode(false);
    //change task name
    dispatch(editTask({ id: props.task.id, content: newName }));
  };
  const onKeyDownHandler = (e) => {
    switch (e.code) {
      case "Escape":
        setEditMode(false);
        setNewName(props.task.content);
        break;
      case "Enter":
        //change task name
        setEditMode(false);
        dispatch(editTask({ id: props.task.id, content: newName }));
        break;
      default:
        break;
    }
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
            {editMode ? (
              <Input
                type="text"
                value={newName}
                onChange={changeContentHandler}
                onBlur={onBlurHandler}
                onKeyDown={onKeyDownHandler}
              />
            ) : (
              <React.Fragment>
                <div>{props.task.content}</div>
                <Icons>
                  <Icon
                    img={PenIcon}
                    onClick={() => {
                      setNewName(props.task.content);
                      setEditMode(true);
                    }}
                  />
                  <Icon img={TrashIcon} onClick={deleteTaskHandler} />
                </Icons>
              </React.Fragment>
            )}
          </Container>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
