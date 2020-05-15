import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Nav-style.scss";

const Nav = ({ menunav,  onClick }) => {
  const { url, sitelink, alt, target } = menunav;


  return (
    <Fragment>
      <li >
        <Link to={url} alt={alt} title={alt} target={target}  onClick={onClick}  >
          {sitelink}
        </Link>
      </li>
    </Fragment>
  );
};
export default Nav;
