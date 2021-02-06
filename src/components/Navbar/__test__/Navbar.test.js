import React from "react";
import ReactDOM from "react-dom";
import { Nav, MobileIcon, NavMenu, NavBtn } from "../NavbarElements";

// test suite for navbar component

// test if navbar renders properly
it("navbar renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav></Nav>, div);
});

// test if burger bar renders properly
it("burger bar for smaller screen size renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MobileIcon></MobileIcon>, div);
});

// test if links menu renders properly
it("navbar menu and links render without crashing", () => {
  const ul = document.createElement("ul");
  ReactDOM.render(<NavMenu></NavMenu>, ul);
});

// test if employee button renders properly
it("Employee Login button renders properly", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(<NavBtn></NavBtn>, nav);
});
