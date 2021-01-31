import React from "react";
import ReactDOM from "react-dom";
import { Nav, NavMenu, NavBtn } from "../NavbarElements";

it("Navbar renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav></Nav>, div);
});

it("NavMenu renders without crashing", () => {
  const ul = document.createElement("ul");
  ReactDOM.render(<NavMenu></NavMenu>, ul);
});

it("Employee Login button renders properly", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(<NavBtn></NavBtn>, nav);
});
