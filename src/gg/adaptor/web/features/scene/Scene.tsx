import { useEffect, useState } from 'react'
import * as DialogUI from './Scene.styled'

export interface IScene {
  dialogs: ISceneDialog[]
  onClose: () => void
}
export interface ISceneDialog {
  seq: number
  name: string
  url: string
  msg: string
}

export const Scene = ({ dialogs = [], onClose = () => null }: IScene) => {
  const [currentSeq, setCurrentSeq] = useState<number>(0)
  const currentDialog = dialogs.find(({ seq }) => seq === currentSeq)
  const onNext = () => setCurrentSeq(currentSeq + 1)

  useEffect(() => {
    if (!currentDialog) onClose()
  }, [currentDialog])

  return (
    <>
      {!!currentDialog && (
        <DialogUI.Wrap>
          <DialogUI.Inner>
            <DialogUI.ImgFrame>{currentDialog.url}</DialogUI.ImgFrame>
            <DialogUI.MsgFrame>
              <DialogUI.Name>{currentDialog.name}</DialogUI.Name>
              <DialogUI.Text>{currentDialog.msg}</DialogUI.Text>
            </DialogUI.MsgFrame>
            <DialogUI.ActionFrame>
              <DialogUI.CloseAction onClick={onClose} />
              <DialogUI.MouseClickAction onClick={onNext} />
            </DialogUI.ActionFrame>
          </DialogUI.Inner>
          <DialogUI.Dimmed />
        </DialogUI.Wrap>
      )}
    </>
  )
}

export const dummyDialogs = [
  { seq: 0, name: '비서. 마리', url: '#Mary.img', msg: `환영합니다 {회사이름}의 관리자님. 저희 길드에 가입해 주셔서 감사합니다.` },
  { seq: 1, name: '비서. 마리', url: '#Mary.img', msg: `지금부터 당신의 작업을 도와 줄 비서. 마리라고 합니다. 만나서 반가워요 :)` },
  { seq: 2, name: '비서. 마리', url: '#Mary.img', msg: `관리자님은 저의 도움을 받아서 많은 것을 하실 수 있어요!` },
  { seq: 3, name: '비서. 마리', url: '#Mary.img', msg: `우선은 제가 조사한 시장의 흐름과 트렌들 알아볼까요?` },
]
