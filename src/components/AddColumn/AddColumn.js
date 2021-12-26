import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { addModeSelector } from "../../selectors";
import { setAddMode, addColumn, addTask } from "./../../actions";

export const AddColumn = () => {
  const addColumnMode = useSelector(addModeSelector);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [addModeType, setAddModeType] = useState("Task");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const cancelHandler = () => {
    dispatch(setAddMode(false));
  };

  const addColumnHandler = () => {
    dispatch(addColumn({ title }));
  };

  const addTaskHandler = () => {
    dispatch(addTask({ content: title }));
  };

  const onChangeAddModeType = (e) => {
    setAddModeType(e.target.value);
  };
  const addHandler = () => {
    switch (addModeType) {
      case "Task":
        addTaskHandler();
        break;

      case "Column":
        addColumnHandler();
        break;

      default:
        break;
    }
    dispatch(setAddMode(false));
  };

  return (
    <Modal isOpen={addColumnMode} contentLabel="Example Modal">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="radio"
            value="Task"
            onChange={onChangeAddModeType}
            checked={addModeType === "Task"}
          />{" "}
          Add task
          <input
            type="radio"
            value="Column"
            onChange={onChangeAddModeType}
            checked={addModeType === "Column"}
          />{" "}
          Add column
        </div>
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <button onClick={addHandler}>Add</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </Modal>
  );
};
