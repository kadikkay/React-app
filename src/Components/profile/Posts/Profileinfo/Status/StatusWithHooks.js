import React, { useEffect, useState } from "react";
import s from "./Status.module.css";

const StatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onUpdateStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <span onDoubleClick={activateEditMode}>
          {props.status || "No status"}
        </span>
      )}
      {editMode && (
        <input
          autoFocus={true}
          onBlur={deactivateEditMode}
          className={s.status}
          value={status}
          onChange={onUpdateStatus}
        />
      )}
    </>
  );
};

export default StatusWithHooks;
