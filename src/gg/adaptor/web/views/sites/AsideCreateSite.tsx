import { reqGetUser, reqPostSite } from "@/gg/adaptor/api";
import SiteCreateUseCase from "@/gg/application/useCases/Site.create.uc";
import { SiteStatusEnum, SitePlatformEnum } from "@/gg/domain/vo";
import { useEffect, useState } from "react";
import * as UI from "./AsideSite.styled";

export const AsideCreateSiteHead = () => {
  return <h3>Request Create Site</h3>;
};
export const AsideCreateSiteCont = (props: {
  onClose: () => void;
  refetch: () => void;
}) => {
  const [status, setStatus] = useState<string>(SiteStatusEnum.CREATED);
  const [platform, setPlatform] = useState<string>(SitePlatformEnum.CAFE24);
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [createSiteUC, setCreateSiteUc] = useState<SiteCreateUseCase>(
    new SiteCreateUseCase()
  );

  useEffect(() => {
    setCreateSiteUc(
      new SiteCreateUseCase({
        user: reqGetUser({ user_id: "test-user" }),
        site: { status, platform, name, url },
      })
    );
  }, [status, platform, name, url]);

  const onCancel = props.onClose;
  const onCreate = () => {
    reqPostSite({
      site_id: "test-id" + Date.now(),
      status,
      platform,
      name,
      url,
    });
    props.refetch();
    props.onClose();
  };

  return (
    <>
      {createSiteUC.ready() && (
        <UI.WrapCont>
          <fieldset>
            <label htmlFor="status">status</label>
            <select
              id="status"
              name="status"
              value={createSiteUC.siteDto.siteEntity.status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {Object.entries(SiteStatusEnum).map(([k, v]) => (
                <option key={k} value={v}>
                  {k}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="platform">platform</label>
            <select
              id="platform"
              name="platform"
              value={createSiteUC.siteDto.siteEntity.platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              {Object.entries(SitePlatformEnum).map(([k, v]) => (
                <option key={k} value={v}>
                  {k}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="name">name</label>
            <input
              id="name"
              type="text"
              placeholder="name"
              value={createSiteUC.siteDto.siteEntity.name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="url">url</label>
            <input
              id="url"
              type="text"
              placeholder="url"
              value={createSiteUC.siteDto.siteEntity.url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>
          <div>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" onClick={onCreate}>
              Create
            </button>
          </div>
        </UI.WrapCont>
      )}
    </>
  );
};
