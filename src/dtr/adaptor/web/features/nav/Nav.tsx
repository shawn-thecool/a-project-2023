import Link from "next/link";
import { NAV_LIST } from "../../config/constants";
import * as UI from "./Nav.styled";

export const Nav = ({ navHook }: { navHook: any }) => {
  console.log(navHook);
  return (
    <>
      <UI.NavWrap isOpen={navHook.isOpen} isMove={navHook.isMove}>
        <UI.NavInner isOpen={navHook.isOpen}>
          <UI.NavHead>
            <NavBtn onClick={navHook.onCloseNavDelay} />
            <Logo />
          </UI.NavHead>
          <UI.NavCont>
            <NavList />
          </UI.NavCont>
          <UI.NavFoot>v0.00000001</UI.NavFoot>
        </UI.NavInner>
        <UI.NavDimmed
          isOpen={navHook.isOpen}
          onClick={navHook.onCloseNavDelay}
        />
      </UI.NavWrap>
    </>
  );
};

export const NavBtn = ({ onClick }: { onClick: () => void }) => {
  return <UI.NavBtn onClick={onClick}>menu</UI.NavBtn>;
};
const Logo = () => {
  return (
    <>
      <h1>LOGO</h1>
    </>
  );
};

const NavList = () => {
  return (
    <>
      {Object.entries(NAV_LIST).map(([name, url]) => (
        <Link key={name} href={url}>
          {name} &rarr;
        </Link>
      ))}
    </>
  );
};
