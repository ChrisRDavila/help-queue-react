import React from "react";
import ticketsImage from "./../img/ticket.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
{/* eslint-disable-next-line  */}
      <img src={ticketsImage} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;