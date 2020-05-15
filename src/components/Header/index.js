import React, { Fragment, useState } from "react";
import Nav from "../Nav";
import Menu from "../Nav/Nav-menu";
import BurguerMenu from "../Ui/BurguerMenu";

const Header = (props) => {
  const [open, setOpen] = useState("");


  const handleToogle = () => {
    setOpen(open === "" ? "isOpen" : "");
   
  };

  

  const headerStyle = {
    id: "Header",
  };
  const NavStyle = {
    className: "section nav",
  };

  const closeNav = () => {
    setOpen(open === "isOpen" ? " " : " ");
  };

  const Navigator = () => (
    <header 
      {...headerStyle}
      className={`header  ${open}`}
    
    >
      <nav  {...NavStyle} >
        <ul>
          {Menu.data.map((menunav, index) => (
            <Nav menunav={menunav} key={index} onClick={closeNav} />
          ))}
        </ul>
      </nav>
    </header>
  );

  return (
    <Fragment>
      <Navigator />
      <BurguerMenu
        id="openMenu"
        onClick={() => {
          handleToogle();
        }}
      >
        click {open ? `abierto` : `cerrado`}
      </BurguerMenu>
    </Fragment>
  );
};

export default Header;
