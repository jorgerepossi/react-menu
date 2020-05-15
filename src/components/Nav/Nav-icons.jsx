import React, { Fragment } from "react";
import "./Nav-style.scss";
import IconButton from "../Ui/IconButton/index.jsx";

const NavIcons = ({ menunav }) => {
  const { url, sitelink, alt, target, iconimg } = menunav;
  return (
    <Fragment>
      <li>
        <a href={url} alt={alt} title={alt} target={target}>
          {sitelink}
          <IconButton iconClass={iconimg} />
        </a>
      </li>
    </Fragment>
  );
};
export default NavIcons;
