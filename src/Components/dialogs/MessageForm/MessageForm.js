import React from "react";
import s from "./MessageForm.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControl/Input";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const MessageForm = (props) => {
  return (
    <form className={s.new} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="body"
        validate={[required, maxLengthCreator(10)]}
        placeholder="Enter ur message..."
      />
      <button className={s.btn}>Swoosh</button>
    </form>
  );
};

const MessageRedaxForm = reduxForm({
  form: "messageBody",
})(MessageForm);

export default MessageRedaxForm;
