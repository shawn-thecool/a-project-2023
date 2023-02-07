import { ReactNode } from "react";
import { IUseAsideRes } from "./Aside.hook";
import * as UI from "./Aside.styled";

export interface IAside {
  hook: IUseAsideRes;
  head?: ReactNode;
  cont?: ReactNode;
  foot?: ReactNode;
}

export const Aside = ({ hook, head = "", cont = "", foot = "" }: IAside) => {
  return (
    <UI.Wrap open={hook.open}>
      <UI.Dimmed onClick={hook.onClose} />
      <UI.Inner open={hook.open}>
        <UI.Head>{head}</UI.Head>
        <UI.Cont>{cont}</UI.Cont>
        <UI.Foot>{foot}</UI.Foot>
      </UI.Inner>
    </UI.Wrap>
  );
};
