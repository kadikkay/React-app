import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { Input } from "../common/FormsControl/Input";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <div className={s.login__block}>
      <h1>Войдите в свою учетную запись</h1>
      <LoginRedaxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div>
        <label>Login</label>
        <Field
          component={Input}
          name="email"
          type="text"
          placeholder="login"
          validate={[required]}
        />
      </div>
      <div>
        <label>Password</label>
        <Field
          component={Input}
          name="password"
          type="password"
          placeholder="Pass"
          validate={[required]}
        />
      </div>
      <div>
        <label>Remember me</label>
        <Field
          component={Input}
          name="rememberMe"
          type="checkbox"
          validate={[required]}
        />
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginRedaxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;

// let array = [-1, 2, 3, 7, 10];
// k = 9;

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if ( array[i] + array[j] === k) {
//       console.log(array[i])
//       console.log(array[j])
      
//     }
//     break
//   }
// }

