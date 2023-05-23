import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMesage/DialogMessage";
import MyDialogMessage from "./MyDialogMesage/MyDialogMessage";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElem = props.state.dialogData.map((dialog) => (
    <DialogItem img={dialog.img} name={dialog.name} id={dialog.id} />
  ));

  let messegeElem = props.state.messageData.messageFriend.map((mail) => (
    <DialogMessage img={mail.img} text={mail.text} />
  ));

  let messegeMyElem = props.state.messageData.messageMe.map((mail) => (
    <MyDialogMessage text={mail.text} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
    props.newMessage("");
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.newMessage(text);
  };

  return (
    <div className={s.block}>
      <div className={s.dialogs}>{dialogElem}</div>
      <div>
        <ul className={s.messages}>
          {messegeElem}
          {messegeMyElem}
        </ul>
        <div className={s.new}>
          <textarea
            className={s.text}
            ref={newMessageElement}
            placeholder="My message..."
            onChange={onMessageChange}
            value={props.state.messageData.newMessageText}
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
