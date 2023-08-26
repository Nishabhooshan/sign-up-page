import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("usersignup");
    console.log(getUserArr);
    const { email, password } = inputValue;
    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("Please enter password more than 5 words");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid user");
        } else {

          localStorage.setItem('user_login', JSON.stringify(userLogin))

          history("/details");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3  col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={getData}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="warning"
                onClick={addData}
                className="col-lg-6"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
