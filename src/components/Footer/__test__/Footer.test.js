import React from "react";
import ReactDOM from "react-dom";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkTitle,
} from "../FooterElements";

it("entire footer renders without error", () => {
  const footer = document.createElement("footer");
  ReactDOM.render(<footer></footer>, footer);
});

it("individual footer wrapper renders  without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<div></div>, div);
});

it("social media section in footer  renders without error", () => {
  const section = document.createElement("section");
  ReactDOM.render(<section></section>, section);
});

it("footer copyright text renders without error", () => {
  const small = document.createElement("small");
  ReactDOM.render(<small></small>, small);
});
