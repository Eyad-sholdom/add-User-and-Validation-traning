import React from "react";
import ReactDom from "react-dom";
import Wrapper from "../helpers/Wrapper";

import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} />;
};

const OverLay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.massege}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.error}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <OverLay
          title={props.title}
          massege={props.massege}
          error={props.error}
        />,
        document.getElementById("overLay-root")
      )}
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backDrop-root")
      )}
    </>
  );
};

export default ErrorModel;
