import React, { Fragment,} from "react";
import { Link } from "react-router-dom";
import "./Nav-style.scss";


const n = ({ menunav }) => {
  const { url, sitelink, alt, target, onClick } = menunav;
  
  return (
    <Fragment>
      <li>
        <Link to={url} alt={alt} title={alt} target={target} >
          {sitelink}
        </Link>
      </li>
    </Fragment>
  );
};
export default n;
