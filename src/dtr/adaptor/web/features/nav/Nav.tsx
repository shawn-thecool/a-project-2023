import Link from "next/link";
import { AppLogo } from "../../components/Logo";
import { NAV_LIST } from "../../config/constants";
import * as UI from "./Nav.styled";

export const Nav = ({ navHook }: { navHook: any }) => {
  return (
    <>
      <UI.NavWrap isOpen={navHook.isOpen} isMove={navHook.isMove}>
        <UI.NavInner isOpen={navHook.isOpen}>
          <UI.NavHead>
            <NavBtn onClick={navHook.onCloseNavDelay} />
            <AppLogo />
          </UI.NavHead>
          <UI.NavCont>
            <NavList />
          </UI.NavCont>
          <UI.NavFoot>
            <small>© 2023. shawn-dev</small>
            <small>v.alpha.0.0.0.1</small>
          </UI.NavFoot>
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
  return <UI.NavBtn onClick={onClick}>Nav</UI.NavBtn>;
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
