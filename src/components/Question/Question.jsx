import React from "react";

import Logo from "../../assets/images/Logo_Print_CMYK.png";

import "./question.styles.scss";

const Question = ({ children }) => {
  return (
    <section className="container">
      <img src={Logo} alt="Infomentum" />
      {children}
    </section>
  );
};

export default Question;
