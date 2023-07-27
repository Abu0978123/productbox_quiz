import React from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
  return (
    
    <div style={{textAlign: "center", paddingTop: "20px"}}>
      <h1>This is Productbox quiz </h1>
      <NavLink to={"/check-out"} className="">
      A page for listing all items
      </NavLink> <br />
      <NavLink to={"/mylist"} className="">
      A page to view all the items that you've checked out
      </NavLink><br />
      <NavLink to={"/add"} className=""> 
      A page that allows you to add new items
      </NavLink>
    </div>
  );
}
