import React from "react";
import ReactDOM from "react-dom";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  WebsiteRights,
} from "../FooterElements";

it("entire footer renders without error", () => {
  const footer = document.createElement("footer");
  ReactDOM.render(<FooterContainer></FooterContainer>, footer);
});

it("individual footer wrapper renders  without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterWrap></FooterWrap>, div);
});

it("social media section in footer  renders without error", () => {
  const section = document.createElement("section");
  ReactDOM.render(<SocialMedia></SocialMedia>, section);
});

it("footer copyright text renders without error", () => {
  const small = document.createElement("small");
  ReactDOM.render(<WebsiteRights></WebsiteRights>, small);
});
