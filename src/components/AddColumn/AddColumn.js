import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { addColumnModeSelector } from "../../selectors";
import { setAddColumnMode, addColumn } from "./../../actions";

export const AddColumn = () => {
  const addColumnMode = useSelector(addColumnModeSelector);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const cancelHandler = () => {
    dispatch(setAddColumnMode(false));
  };

  const addColumnHandler = () => {
    dispatch(addColumn({ title }));
  };

  return (
    <Modal isOpen={addColumnMode} contentLabel="Example Modal">
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <button onClick={addColumnHandler}>Add</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </Modal>
  );
};
