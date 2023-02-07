import { reqPatchSite, reqPostSite } from "@/gg/adaptor/api";
import { ISiteEntity } from "@/gg/domain/entities/Site.entity";
import { SiteStatusEnum, SitePlatformEnum } from "@/gg/domain/vo";
import { useState } from "react";
import * as UI from "./AsideSite.styled";

export const AsideUpdateSiteHead = () => {
  return <h3>Request Update Site</h3>;
};
export const AsideUpdateSiteCont = (props: {
  site: ISiteEntity;
  onClose: () => void;
  refetch: () => void;
}) => {
  const [siteId, setSiteId] = useState<string>(props.site.id);
  const [status, setStatus] = useState<string>(props.site.status);
  const [platform, setPlatform] = useState<string>(props.site.platform);
  const [name, setName] = useState<string>(props.site.name);
  const [url, setUrl] = useState<string>(props.site.url);

  const onCancel = props.onClose;
  const onUpdate = () => {
    reqPatchSite({ site_id: siteId, status, platform, name, url });
    props.refetch();
    props.onClose();
  };

  return (
    <UI.WrapCont>
      <fieldset>
        <label htmlFor="siteId">site id</label>
        <input
          id="siteId"
          className="readonly"
          type="text"
          placeholder="site_id"
          value={siteId}
          disabled={true}
          readOnly={true}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="status">status</label>
        <select
          id="status"
          name="status"
          value={status}
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
          value={platform}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="url">url</label>
        <input
          id="url"
          type="text"
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </fieldset>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" onClick={onUpdate}>
          Update
        </button>
      </div>
    </UI.WrapCont>
  );
};
