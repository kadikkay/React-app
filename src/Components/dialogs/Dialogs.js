import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import DialogBlock from "./DialogBlock/DialogBlock";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElem = props.dialogData.map((dialog) => (
    <DialogItem img={dialog.img} name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };
  return (
    <div className={s.block}>
      <div className={s.dialogs}>{dialogElem}</div>
      <div>
        <DialogBlock state={props.state} />
        <div className={s.new}>
          <textarea
            className={s.text}
            placeholder="Enter ur message..."
            onChange={onMessageChange}
            value={props.newMessageText}
          ></textarea>
          <button className={s.btn} onClick={addMessage}>
            Swoosh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
