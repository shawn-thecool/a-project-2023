import Link from "next/link";
import { NAV_LIST } from "../../config/constants";
import { AppLogo } from "../logo/Logo";
import { IUseNavRes } from "./Nav.hook";
import * as NAV_UI from "./Nav.styled";

export const Nav = ({ hook }: { hook: IUseNavRes }) => {
  return (
    <NAV_UI.Wrap open={hook.open}>
      <NAV_UI.Dimmed onClick={hook.onClose} />
      <NAV_UI.Inner open={hook.open}>
        <NAV_UI.Head>
          <NavBtn onClick={hook.onClose} />
          <AppLogo />
        </NAV_UI.Head>
        <NAV_UI.Cont>
          {Object.entries(NAV_LIST).map(([name, url]) => (
            <Link key={name} href={url}>
              {name} &rarr;
            </Link>
          ))}
        </NAV_UI.Cont>
        <NAV_UI.Foot>footer</NAV_UI.Foot>
      </NAV_UI.Inner>
    </NAV_UI.Wrap>
  );
};

export const NavBtn = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Nav</button>;
};
