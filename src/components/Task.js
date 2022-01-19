import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Icon } from "./Icon";
import TrashIcon from "./../images/trash-alt-solid.svg";
import PenIcon from "./../images/pen-solid.svg";
import CheckIcon from "./../images/check-solid.svg";
import CrossIcon from "./../images/times-solid.svg";
import {
  deleteTask,
  editTask,
  setConfirm,
  setConfirmStatus,
} from "./../actions";
import { TextArea } from "./TextArea";

const Container = styled(ListItem)`
  padding: 8px;
  border: 1px solid rgb(25, 118, 210);
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  line-height: 1.5;
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
      setConfirm({
        message: "You are going to delete task!",
        act: deleteTask({
          columnId: props.columnId,
          taskId: props.task.id,
          taskIndex: props.index,
        }),
      })
    );
    dispatch(setConfirmStatus(true));
  };
  const changeContentHandler = (e) => {
    setNewName(e.target.value);
  };
  const onBlurHandler = (e) => {
    setEditMode(false);
    //change task name
    dispatch(
      editTask({
        id: props.task.id,
        content: newName.replace(/\r?\n|\r/g, "<br>"),
      })
    );
  };
  const onKeyDownHandler = (e) => {
    switch (e.code) {
      case "Escape":
        setEditMode(false);
        setNewName(props.task.content);
        break;
      default:
        break;
    }
  };

  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={!props.isAdmin}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container isDragging={snapshot.isDragging}>
            {editMode ? (
              <React.Fragment>
                <TextArea
                  type="text"
                  value={newName}
                  onChange={changeContentHandler}
                  onBlur={onBlurHandler}
                  onKeyDown={onKeyDownHandler}
                />
                <Icons>
                  <Icon img={CheckIcon} onClick={onBlurHandler} />
                  <Icon
                    img={CrossIcon}
                    onClick={() => {
                      setEditMode(false);
                      setNewName(props.task.content);
                    }}
                  />
                </Icons>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div
                  dangerouslySetInnerHTML={{ __html: props.task.content }}
                ></div>

                {props.isAdmin ? (
                  <ListItemSecondaryAction>
                    <IconButton edge="end" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                ) : /*  <Icons>
                    <Icon
                      img={PenIcon}
                      onClick={() => {
                        setNewName(
                          props.task.content.replace(/<br\s*[/]?>/gi, "\n")
                        );
                        setEditMode(true);
                      }}
                    />
                    <Icon img={TrashIcon} onClick={deleteTaskHandler} />
                  </Icons> */
                null}
              </React.Fragment>
            )}
          </Container>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
