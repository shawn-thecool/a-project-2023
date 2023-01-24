import { reqPostSite } from "@/dtr/adaptor/api";
import { SiteStatusEnum, SitePlatformEnum } from "@/dtr/domain/valueObjects";
import { useState } from "react";
import * as UI from "./AsideSite.styled";

export const AsideCreateSiteHead = () => {
  return <h3>Request Create Site</h3>;
};
export const AsideCreateSiteCont = (props: {
  onClose: () => void;
  refetch: () => void;
}) => {
  const [siteId, setSiteId] = useState<string>("");
  const [status, setStatus] = useState<string>(SiteStatusEnum.CREATED);
  const [platform, setPlatform] = useState<string>(SitePlatformEnum.CAFE24);
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const onCancel = props.onClose;
  const onCreate = () => {
    reqPostSite({ site_id: siteId, status, platform, name, url });
    props.refetch();
    props.onClose();
  };

  return (
    <UI.WrapCont>
      <fieldset>
        <label htmlFor="siteId">site id</label>
        <input
          id="siteId"
          type="text"
          placeholder="site_id"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
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
        <button type="button" onClick={onCreate}>
          Create
        </button>
      </div>
    </UI.WrapCont>
  );
};
