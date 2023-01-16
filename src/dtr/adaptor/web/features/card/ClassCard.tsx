import * as UI from "./ClassCard.styled";

interface IClassCard {
  name: string;
  attrs: [string, string, string][];
  methods: [string, string, string][];
}

export const ClassCard = ({ name, attrs, methods }: IClassCard) => {
  return (
    <>
      <UI.ClassCardWrap>
        <UI.ClassCardHead>{name}</UI.ClassCardHead>
        <UI.ClassCardAttrs>
          {attrs.map(([am, attr, type]) => (
            <li key={attr}>
              {am === "private" ? <em>{am}</em> : <span>{am}</span>}
              <strong> {attr} </strong>
              <i>:{type}</i>
            </li>
          ))}
        </UI.ClassCardAttrs>
        <UI.ClassCardMethods>
          {methods.map(([am, method, type]) => (
            <li key={method}>
              {am === "private" ? <em>{am}</em> : <span>{am}</span>}
              <strong> {method}( ) </strong>
              <i>:{type}</i>
            </li>
          ))}
        </UI.ClassCardMethods>
      </UI.ClassCardWrap>
    </>
  );
};
