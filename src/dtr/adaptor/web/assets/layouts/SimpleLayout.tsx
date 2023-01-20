import React, { ReactNode } from "react";
import { AppLogo } from "../../features/logo/Logo";
import Nav, { NavBtn, useNav } from "../../features/nav";
import * as App from "../styles/app.styled";

export default function SimpleLayout(props: {
  head: ReactNode;
  main: ReactNode;
}) {
  return (
    <App.Doc>
      <App.Head>
        <NavLogo />
        {props.head}
      </App.Head>
      <App.Main>
        <App.ScrollCont>
          {props.main}
          <App.Foot>
            <small>© 2023. shawn-dev</small>
            <small>v.alpha.0.0.0.1</small>
          </App.Foot>
        </App.ScrollCont>
      </App.Main>
    </App.Doc>
  );
}

const NavLogo = () => {
  const navHook = useNav();
  return (
    <>
      <NavBtn onClick={navHook.onOpen} />
      <AppLogo />
      <Nav hook={navHook} />
    </>
  );
};
