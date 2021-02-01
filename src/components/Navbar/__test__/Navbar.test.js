import React from "react";
import ReactDOM from "react-dom";
import { Nav, MobileIcon, NavMenu, NavBtn } from "../NavbarElements";

it("navbar renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav></Nav>, div);
});

it("burger bar for smaller screen size renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MobileIcon></MobileIcon>, div);
});

it("navbar menu and links render without crashing", () => {
  const ul = document.createElement("ul");
  ReactDOM.render(<NavMenu></NavMenu>, ul);
});

it("Employee Login button renders properly", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(<NavBtn></NavBtn>, nav);
});
