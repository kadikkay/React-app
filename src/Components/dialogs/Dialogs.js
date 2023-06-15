import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import DialogBlock from "./DialogBlock/DialogBlock";
import s from "./Dialogs.module.css";
import MessageRedaxForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {
  let dialogElem = props.dialogData.map((dialog) => (
    <DialogItem
      img={dialog.img}
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
    />
  ));

    let addNewMessage  = (values) => {
      props.addMessage(values.body)
    }

  return (
    <div className={s.block}>
      <div className={s.dialogs}>{dialogElem}</div>
      <div>
        <DialogBlock state={props.state} />
        <MessageRedaxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
