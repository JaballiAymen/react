import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "../../../Services/Reducers/Types";
import { Navigate } from "react-router-dom";

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state:any) => state.login.isLoggedIn);
  const user = useSelector((state:any) => state.login.user);

    const handleInput = (e: any) => {
        console.log(e.target.value);
    }



  const handleLogin = () => {
    dispatch({ type: LOGIN, user: { email: "test" } });    
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
      if(isLoggedIn) {
        <Navigate to="/dashboard" />
      }
    </div>
  );
}

export default Login;
