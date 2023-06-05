import s from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  return (
    <li className={s.item}>
      <img src={props.img} />
      <span className={s.text}>{props.text}</span>
    </li>
  );
};

export default DialogMessage;
