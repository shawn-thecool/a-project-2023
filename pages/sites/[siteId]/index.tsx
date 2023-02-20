import Head from 'next/head'
import { useState } from 'react'
import SimpleLayout from '../../../src/gg/adaptor/web/assets/layouts/SimpleLayout'
import { MatrixRender } from '../../../src/gg/adaptor/web/features/matrix'
import { dummyReport, Report } from '../../../src/gg/adaptor/web/features/report'
import { dummyDialogs, Scene } from '../../../src/gg/adaptor/web/features/scene'
import { SVGContainer } from '../../../src/gg/adaptor/web/lib/SVGRenderer'
import { CreateQuest } from '../../../src/gg/adaptor/web/views/home/CreateQuest'

export default function Site() {
  const [showScene, setShowScene] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SimpleLayout
        head={'home.page'}
        main={
          <div>
            <div>
              <SVGContainer w={'100%'} h={'300px'} bg={'gold'} />
            </div>
            <div>
              <strong>test matrix</strong>
              <MatrixRender />
            </div>
            <hr />
            <section>
              <CreateQuest />
            </section>
            <section>
              <button onClick={() => setShowScene(true)}>showScene</button>
              {showScene && <Scene dialogs={dummyDialogs} onClose={() => setShowScene(false)} />}
            </section>
            <section>
              <Report title={dummyReport.title} contents={dummyReport.contents} />
            </section>
          </div>
        }
      />
    </>
  )
}
