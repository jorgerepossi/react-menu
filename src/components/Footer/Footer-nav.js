import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FooterNav = ({ menunav }) => {
  const { url, sitelink, alt } = menunav;
  return (
    <Fragment>
      <li>
        <Link to={url} alt={alt} title={alt}>
          {sitelink}
        </Link>
      </li>
    </Fragment>
  );
};
export default FooterNav;
