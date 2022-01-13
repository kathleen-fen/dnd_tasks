import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";
import { columnTasksSelector, columnSelector } from "./../selectors";
import { Icon } from "./Icon";
import TrashIcon from "./../images/trash-alt-solid.svg";
import PenIcon from "./../images/pen-solid.svg";
import {
  deleteColumn,
  editColumn,
  setConfirm,
  setConfirmStatus,
} from "./../actions";
import { Input } from "./Input";

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
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const column = useSelector(columnSelector(props.columnId));
  const tasks = useSelector(columnTasksSelector(props.columnId));
  const dispatch = useDispatch();

  const deleteColumnHandler = () => {
    dispatch(
      setConfirm({
        message: "You are going to delete column!",
        act: deleteColumn({ columnId: column.id }),
      })
    );
    dispatch(setConfirmStatus(true));
  };

  const changeTitleHandler = (e) => {
    setNewName(e.target.value);
  };
  const onBlurHandler = (e) => {
    setEditMode(false);
    //change column name
    dispatch(editColumn({ columnId: column.id, columnTitle: newName }));
  };
  const onKeyDownHandler = (e) => {
    switch (e.code) {
      case "Escape":
        setEditMode(false);
        setNewName(column.title);
        break;
      case "Enter":
        //change column name
        setEditMode(false);
        dispatch(editColumn({ columnId: column.id, columnTitle: newName }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {column ? (
        <Draggable draggableId={column.id} index={props.index}>
          {(provided) => (
            <div {...provided.draggableProps} ref={provided.innerRef}>
              <Container>
                <TitleContainer {...provided.dragHandleProps}>
                  {editMode ? (
                    <Input
                      type="text"
                      value={newName}
                      onChange={changeTitleHandler}
                      onBlur={onBlurHandler}
                      onKeyDown={onKeyDownHandler}
                      autoFocus={true}
                    />
                  ) : (
                    <React.Fragment>
                      <Title>{column.title}</Title>

                      {props.isAdmin ? (
                        <Icons>
                          <Icon
                            img={PenIcon}
                            onClick={() => {
                              setNewName(column.title);
                              setEditMode(true);
                            }}
                          />
                          <Icon img={TrashIcon} onClick={deleteColumnHandler} />
                        </Icons>
                      ) : null}
                    </React.Fragment>
                  )}{" "}
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
                              isAdmin={props.isAdmin}
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
