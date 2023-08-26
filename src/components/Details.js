import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Details = () => {
  const [loginData, setLoginData] = useState([]);
  const [show, setShow] = useState(false);

  const history = useNavigate()

  var todayDate = new Date().toISOString().slice(0, 10);

  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);

      const userBirth = loginData.map((el, k) => {
        return el.date === todayDate;
      });

      if (userBirth) {
        setTimeout(() => {
          handleShow();
        },3000);
      }
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userLogout = ()=>{
    localStorage.removeItem("user_login")
    history("/")
  }

  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details page</h1>
          <h1>{loginData[0].name}</h1>
          <Button onClick={userLogout}>Logout</Button>

          {/* {loginData[0].date === todayDate ? ( */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Happy Birthday</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          {/* ) : (
            ""
          )} */}
        </>
      )}
    </>
  );
};

export default Details;
