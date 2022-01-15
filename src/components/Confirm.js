import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { confirmSelector, confirmStatusSelector } from "./../selectors";
import { setConfirmStatus } from "./../actions";
Modal.setAppElement("#root");

export const Confirm = (props) => {
  const dispatch = useDispatch();
  const confirm = useSelector(confirmSelector);
  const confirmStatus = useSelector(confirmStatusSelector);

  const handleCancel = () => {
    dispatch(setConfirmStatus(false));
  };

  const handleConfirm = () => {
    dispatch(confirm.act);
    dispatch(setConfirmStatus(false));
  };

  return (
    <div>
      <Dialog
        open={confirmStatus}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirm.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Confirm</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
