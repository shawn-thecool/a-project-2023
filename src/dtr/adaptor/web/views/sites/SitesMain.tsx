import { reqGetUser, reqGetSites, reqDeleteSite } from "@/dtr/adaptor/api";
import { SiteGetUseCase } from "@/dtr/application/useCases/Site.get.uc";
import { ISiteEntity } from "@/dtr/domain/entities/Site.entity";
import { useState, useEffect } from "react";
import { PLATFORM_COLOR_MAP } from "../../config/constants";
import Aside, { useAside } from "../../features/aside";
import { AsideCreateSiteCont, AsideCreateSiteHead } from "./AsideCreateSite";
import { AsideUpdateSiteCont, AsideUpdateSiteHead } from "./AsideUpdateSite";
import * as UI from "./SitesMain.styled";

export const SitesMain = () => {
  const [uc, setUc] = useState(new SiteGetUseCase());
  const [refetch, setRefetch] = useState<number>(1);

  useEffect(() => {
    setUc(
      new SiteGetUseCase({
        userRes: reqGetUser({ user_id: "test-user" }),
        sitesRes: reqGetSites({ page_no: 1, page_size: 10 }),
      })
    );
  }, [refetch]);

  return (
    <UI.Wrap>
      <UI.SectionCreate>
        <CreateSite refetch={() => setRefetch(refetch + 1)} />
      </UI.SectionCreate>
      <UI.SectionList>
        {uc.ready() &&
          uc.sitesDto.siteEntities.map((site) => (
            <UI.SiteCard key={site.id}>
              <UI.SiteCardPlatform color={PLATFORM_COLOR_MAP[site.platform]}>
                {site.platform}
              </UI.SiteCardPlatform>
              <UI.SiteCardCont>
                <div>
                  <strong>{site.id}</strong> | <span>{site.status}</span>
                </div>
                <div>{site.name}</div>
                <div>
                  <a href="#">{site.url.toLocaleLowerCase()}</a>
                </div>
              </UI.SiteCardCont>
              <UI.SiteCardOption>
                <UpdateSite
                  site={site}
                  refetch={() => setRefetch(refetch + 1)}
                />
                <DeleteSite
                  site={site}
                  refetch={() => setRefetch(refetch + 1)}
                />
              </UI.SiteCardOption>
            </UI.SiteCard>
          ))}
      </UI.SectionList>
    </UI.Wrap>
  );
};

const CreateSite = (props: { refetch: () => void }) => {
  const asideHook = useAside();
  return (
    <>
      <button onClick={asideHook.onOpen}>+</button>
      <Aside
        hook={asideHook}
        head={<AsideCreateSiteHead />}
        cont={
          asideHook.open && (
            <AsideCreateSiteCont
              refetch={props.refetch}
              onClose={asideHook.onClose}
            />
          )
        }
      />
    </>
  );
};
const UpdateSite = (props: { site: ISiteEntity; refetch: () => void }) => {
  const asideHook = useAside();
  return (
    <>
      <button onClick={asideHook.onOpen}>update &rarr;</button>
      <Aside
        hook={asideHook}
        head={<AsideUpdateSiteHead />}
        cont={
          asideHook.open && (
            <AsideUpdateSiteCont
              site={props.site}
              refetch={props.refetch}
              onClose={asideHook.onClose}
            />
          )
        }
      />
    </>
  );
};
const DeleteSite = (props: { site: ISiteEntity; refetch: () => void }) => {
  const onDelete = () => {
    reqDeleteSite({ site_id: props.site.id });
    props.refetch();
  };
  return (
    <>
      <button onClick={onDelete}>delete &rarr;</button>
    </>
  );
};
