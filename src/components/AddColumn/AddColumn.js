import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { addModeSelector } from "../../selectors";
import { setAddMode, addColumn, addTask } from "./../../actions";
Modal.setAppElement("#root");

export const AddColumn = () => {
  const addColumnMode = useSelector(addModeSelector);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [addModeType, setAddModeType] = useState("Task");

  const cancelHandler = () => {
    dispatch(setAddMode(false));
  };

  const addColumnHandler = () => {
    dispatch(addColumn({ title }));
  };

  const addTaskHandler = () => {
    dispatch(addTask({ content: title.replace(/\r?\n|\r/g, "<br>") }));
    console.log("rep: ", title.replace(/\r?\n|\r/g, "<br>"));
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
    <div>
      <Dialog open={addColumnMode} onClose={cancelHandler}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose option for item to add.</DialogContentText>
          <FormControl component="fieldset">
            <FormLabel component="legend">Item type</FormLabel>
            <RadioGroup
              row
              aria-label="item type"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Task"
                onChange={onChangeAddModeType}
                checked={addModeType === "Task"}
                control={<Radio />}
                label="Task"
              />
              <FormControlLabel
                value="Column"
                onChange={onChangeAddModeType}
                checked={addModeType === "Column"}
                control={<Radio />}
                label="Column"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            multiline={addModeType === "Task"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addHandler}>Add</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
    /*  <Modal isOpen={addColumnMode} contentLabel="Example Modal">
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
        {addModeType === "Column" ? (
          <label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </label>
        ) : (
          <label>
            <textarea
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></textarea>
          </label>
        )}
        <button onClick={addHandler}>Add</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </Modal> */
  );
};
