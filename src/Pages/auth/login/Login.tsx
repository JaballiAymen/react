import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function Login(): JSX.Element {
  const dispatch = useDispatch();

  const handleInput = (e: any) => {
    console.log(e.target.value);
  };

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', user: { email: "test" } });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__header">
          <h1> Login </h1>
        </div>
        <div className="login__container__body">
          <Input label="Email" name="email" onChange={handleInput} />
        </div>
        <div className="login__container__footer">
          <Button onClick={handleLogin} text="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
