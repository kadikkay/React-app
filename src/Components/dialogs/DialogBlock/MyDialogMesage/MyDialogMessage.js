import s from "./MyDialogMessage.module.css";

const DialogMessage = (props) => {
  return (
    <li className={s.item}>
      <span>{props.text}</span>
      <img src="https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png" />
    </li>
  );
};

export default DialogMessage;
