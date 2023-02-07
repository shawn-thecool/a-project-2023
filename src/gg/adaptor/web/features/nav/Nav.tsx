import Link from "next/link";
import { NAV_LIST } from "../../config/constants";
import { AppLogo } from "../logo/Logo";
import { IUseNavRes } from "./Nav.hook";
import * as UI from "./Nav.styled";

export const Nav = ({ hook }: { hook: IUseNavRes }) => {
  return (
    <UI.Wrap open={hook.open}>
      <UI.Dimmed onClick={hook.onClose} />
      <UI.Inner open={hook.open}>
        <UI.Head>
          <NavBtn onClick={hook.onClose} />
          <AppLogo />
        </UI.Head>
        <UI.Cont>
          {Object.entries(NAV_LIST).map(([name, url]) => (
            <Link key={name} href={url}>
              {name} &rarr;
            </Link>
          ))}
        </UI.Cont>
        <UI.Foot>footer</UI.Foot>
      </UI.Inner>
    </UI.Wrap>
  );
};

export const NavBtn = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Nav</button>;
};
