import * as UI from './CampaignCreatMain.styled'

const lang = {
  mainTitle: "Let's Create Campaign",
  overviewSectionTitle: 'Campaign creation overview',
}

export const CampaignCreateMain = () => {
  return (
    <>
    <div></div>
      <UI.Wrap>
        <UI.MainTitle>{lang.mainTitle}</UI.MainTitle>
        <UI.OverviewSection>
          <UI.OverviewSectionTitle>{lang.overviewSectionTitle}</UI.OverviewSectionTitle>
          <UI.OverviewSectionContent>
            <ol>
              {[1, 2, 3, 4, 5].map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ol>
          </UI.OverviewSectionContent>
        </UI.OverviewSection>
      </UI.Wrap>
    </>
  )
}
