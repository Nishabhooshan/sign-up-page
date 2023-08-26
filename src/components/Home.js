import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    // console.log(e.target.value);
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
    const { name, email, date, password } = inputValue;
    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email");
    } else if (date === "") {
      alert("Date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("Please enter password more than 5 words");
    } else {
      localStorage.setItem("usersignup", JSON.stringify([...data, inputValue]));
     
   
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control name="date" onChange={getData} type="date" />
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
            <p className="mt-3">
              Already have an account <span> <NavLink to="login">Sign In</NavLink></span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
