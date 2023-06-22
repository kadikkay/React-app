import { Field } from "redux-form";
import s from "./Input.module.css";

// const FormControl = (input, meta, ...props) => {
//   return (
//     <div>
//       <input
//         {...input}
//         {...props}
//         className={s.input + " " + (meta.touched && meta.error ? s.error : "")}
//       />
//       {meta.touched && meta.error && <span>{meta.error}</span>}
//     </div>
//   );
// };

export const Input = ({ input, meta, ...props }) => {
  return (
    <div>
      <input
        {...input}
        {...props}
        className={s.input + " " + (meta.touched && meta.error ? s.error : "")}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea
        {...input}
        {...props}
        className={s.text + " " + (meta.touched && meta.error ? s.error : "")}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (component, name, type, placeholder, validate) => (
  <div>
    <Field
      component={component}
      name={name}
      type={type}
      placeholder={placeholder}
      validate={validate}
    />
  </div>
);
