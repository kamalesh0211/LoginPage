import "./LoginPage.css";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  return (
    <div className="Container">
      <form action="">
        <h1>Login</h1>
        <div className="Input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="Icon" />
        </div>
        <div className="Input-box">
          <input type="password" placeholder="Password" required />
          <RiLockPasswordFill className="Icon" />
        </div>
        <div className="RememberMe">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forget password</a>
        </div>
        <button type="submit">Login</button>
        <div className="CreateAccount">
          <a href="">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
