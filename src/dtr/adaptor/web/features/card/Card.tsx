import * as UI from "./Card.styled";

const PLATFORM_COLOR_MAP = {
  cafe24: "#1067e8",
  makeshop: "#104a91",
  godomall: "#fa2927",
  custom: "#06c29c",
  shopify: "#91b944",
};

export const CardBasic = ({ site }: { site: any }) => {
  return (
    <UI.WrapCard>
      <UI.CardPlatform color={PLATFORM_COLOR_MAP[site.platform]}>
        {site.platform}
      </UI.CardPlatform>
      <UI.CardCont>
        <div>
          <strong>{site.id}</strong> | <span>{site.status}</span>
        </div>
        <div>{site.name}</div>
        <div>
          <a href="#">{site.url.toLocaleLowerCase()}</a>
        </div>
      </UI.CardCont>
      <UI.CardOption>
        <button>create &rarr;</button>
        <button>update &rarr;</button>
        <button>delete &rarr;</button>
      </UI.CardOption>
    </UI.WrapCard>
  );
};
