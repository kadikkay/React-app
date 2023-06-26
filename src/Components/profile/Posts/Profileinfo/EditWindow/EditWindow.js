import React from "react";
import s from "./EditWindow.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../common/FormsControl/Input";

const EditWindow = (props) => {
  return (
    <div className={s.modal}>
      <form onSubmit={props.handleSubmit}>
        <Field
          placeholder="My text..."
          component={Input}
          name="lookingForAJob"
        />
        <Field
          placeholder="My text..."
          component={Input}
          name="lookingForAJobDescription"
        />
        <Field placeholder="My text..." component={Input} name="fullName" />
        <Field placeholder="My text..." component={Input} name="github" />
        <Field placeholder="My text..." component={Input} name="website" />
        <button className={s.btn}>Publish</button>
      </form>
    </div>
  );
};

const EditWindowRedaxForm = reduxForm({
  form: "editWindow",
})(EditWindow);

export default EditWindowRedaxForm;
