import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SimpleLayout from '../../../../../src/gg/adaptor/web/assets/layouts/SimpleLayout'
import { useReportUC } from '../../../../../src/gg/adaptor/web/hooks/useReportUC'

export default function Report(context) {
  const router = useRouter()
  console.log(router)
  const reportUC = useReportUC()
  const siteId = router.query['siteId']
  const reportId = router.query['reportId'] ? String(router.query['reportId']) : ''

  // if (!isReady) return <div>rendering...</div>
  // const reportRes = reportUC.getReport(siteId, reportId)

  // if (reportRes.isLoading) return <>Loading...</>

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SimpleLayout head={'report.page'} main={<div>{/* <pre>{JSON.stringify(reportRes, null, 2)}</pre> */}</div>} />
    </>
  )
}
