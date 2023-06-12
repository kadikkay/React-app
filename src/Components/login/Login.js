import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";

const Login = (props) => {

  // const onSubmit 

  return (
    <div className={s.login__block}>
      <h1>Войдите в свою учетную запись</h1>
      <LoginRedaxForm />
    </div>
  );
};

const LoginForm = (props) => {
  debugger;
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div>
        <label>Login</label>
        <Field component="input" name="login" type="text" placeholder="login" />
      </div>
      <div>
        <label>Password</label>
        <Field
          component="input"
          name="password"
          type="text"
          placeholder="Pass"
        />
      </div>
      <div>
        <label>Remember me</label>
        <Field component="input" name="rememberme" type="checkbox" />
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginRedaxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;
