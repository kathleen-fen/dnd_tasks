import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { confirmSelector, confirmStatusSelector } from "./../selectors";
import { setConfirmStatus } from "./../actions";
Modal.setAppElement("#root");

export const Confirm = (props) => {
  const dispatch = useDispatch();
  const confirm = useSelector(confirmSelector);
  const confirmStatus = useSelector(confirmStatusSelector);

  return (
    <Modal isOpen={confirmStatus}>
      <div>{confirm.message}</div>
      <button
        onClick={() => {
          dispatch(confirm.act);
          dispatch(setConfirmStatus(false));
        }}
      >
        Confirm
      </button>
      <button
        onClick={() => {
          dispatch(setConfirmStatus(false));
        }}
      >
        Cancel
      </button>
    </Modal>
  );
};
