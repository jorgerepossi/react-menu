import React from "react";
import Button from "../Button";

const BurguerMenu = ({ onClick, ...props }) => {
  return <Button onClick={onClick} type='button'  id="openMenu">
    { props.children}
  </Button>;
};

export default BurguerMenu;
