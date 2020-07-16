import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <ul className="list-item">
        {props.data.map(str => {
          return <li key={String(str)}>{str}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
