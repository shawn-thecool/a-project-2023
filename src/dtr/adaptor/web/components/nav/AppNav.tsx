import * as UI from "./AppNav.styled";

export const AppNav = ({ hook }: { hook: any }) => {
  return (
    <UI.Wrap open={hook.open} onClick={hook.onClose}>
      <UI.Inner open={hook.open}>
        <UI.Head>
          <AppNavBtn handler={hook.onClose} />
        </UI.Head>
        <UI.Cont>cont</UI.Cont>
        <UI.Foot>foot</UI.Foot>
      </UI.Inner>
    </UI.Wrap>
  );
};

export const AppNavBtn = ({ handler }: { handler: any }) => {
  return (
    <UI.WrapBtn>
      <button onClick={handler}>nav</button>
      <h1>Logo</h1>
    </UI.WrapBtn>
  );
};
