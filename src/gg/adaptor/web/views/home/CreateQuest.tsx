import * as UI from './CreateQuest.styled'

export const CreateQuest = () => {
  const flows = [
    {
      id: 1,
      type: 'report',
      isChecked: false,
      data: {
        reportId: 'report_id_1',
      },
    },
  ]

  return (
    <>
      <UI.Flow>
        <UI.Report>report</UI.Report>
        <UI.Idea>idea</UI.Idea>
        <UI.Campaign>create campaign</UI.Campaign>
        <UI.Channel>delivery channel</UI.Channel>
        <UI.Creative>select creative</UI.Creative>
        <UI.Target>target user</UI.Target>
      </UI.Flow>
    </>
  )
}
