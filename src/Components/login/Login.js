import { reduxForm } from "redux-form";
import s from "./Login.module.css";
import { createField, Input } from "../common/FormsControl/Input";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={s.login__block}>
      <h1>Войдите в свою учетную запись</h1>
      <LoginRedaxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <label>Login</label>
        {createField(Input, "email", "text", "login", [required])}
      </div>
      <div>
        <label>Password</label>
        {createField(Input, "password", "password", "Pass", [required])}
      </div>
      <div>
        <label>Remember me</label>
        {createField(Input, "rememberMe", "checkbox", null, [required])}
      </div>
      <button>Log in</button>
    </form>
  );
};

const LoginRedaxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;
