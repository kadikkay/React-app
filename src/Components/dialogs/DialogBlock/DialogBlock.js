import React from "react";
import DialogMessage from "./DialogMesage/DialogMessage";
import MyDialogMessage from "./MyDialogMesage/MyDialogMessage";
import s from "./DialogBlock.module.css";

const DialogBlock = (props) => {
  let messegeElem = props.state.messageFriend.map((mail) => (
    <DialogMessage img={mail.img} key={mail.id} text={mail.text} />
  ));

  let messegeMyElem = props.state.messageMe.map((mail) => (
    <MyDialogMessage key={mail.id} text={mail.text} />
  ));

  return (
    <ul className={s.messages}>
      {messegeElem}
      {messegeMyElem}
    </ul>
  );
};

export default DialogBlock;
