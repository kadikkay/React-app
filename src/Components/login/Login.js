import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { Input } from "../common/FormsControl/Input";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.setLogin(formData);
    console.log(formData);
  };
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
          validate={[required, maxLengthCreator(5)]}
        />
      </div>
      <div>
        <label>Password</label>
        <Field
          component={Input}
          name="password"
          type="text"
          placeholder="Pass"
          validate={[required, maxLengthCreator(10)]}
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
