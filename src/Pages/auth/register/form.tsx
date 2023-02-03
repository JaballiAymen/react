import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import Input from "../../../components/Input";

function Register(): JSX.Element {
  const dispatch = useDispatch();

  const handleInput = (e: any) => {
    console.log(e.target.value);
  };

  const handleRegister = () => {
    dispatch({ type: "REGISTER", user: { email: "test" } });
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container__header">
          <h1> Register </h1>
        </div>
        <div className="register__container__body">
          <Input label="Email" name="email" onChange={handleInput} />
        </div>
        <div className="register__container__footer">
          <Button onClick={handleRegister} text="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
