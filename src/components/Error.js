import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
  const history = useNavigate();
  return (
    <div>
      <h1>Page not found</h1>
      <Button  onClick={()=>history("/")}>Go back</Button>
    </div>
  );
};

export default Error;
