import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${apiUrl}/auth/register`, user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleGoToLogin = () => {
    history.push("/login"); // Navigate to login page
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App</h3>
          <span className="loginDesc">
          Connect with friends and relatives
          </span>
        </div>
        <div className="loginRight loginBox">
        <h1 style={{ margin: '0', color: '#1775EE', marginRight: '20px' }}>Signup</h1>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <span>
              Already have an account?{" "}
              <button type="button" onClick={handleGoToLogin} className="loginButtonLink">
                Log in
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
