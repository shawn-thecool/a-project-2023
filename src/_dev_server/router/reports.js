const express = require('express')
const router = express.Router()

const generateReport = (id) => {
  return {
    id: id,
    title: 'report_title_' + Math.random().toFixed(3),
    desc: 'report_desc_' + Math.random().toFixed(3),
    bodyText: 'report_body_text_' + Math.random().toFixed(3),
    data: [
      ['stat_a', '87%'],
      ['stat_b', '27%'],
      ['stat_c', '33%'],
    ],
    createdAt: Date.now(),
    createdBy: 'shawn',
    updatedAt: -1,
    updatedBy: '',
  }
}

router.get('/', (req, res) => {
  res.json({
    code: '200',
    message: 'success',
    data: {
      reports: Array.from({ length: 10 }, (_, idx) => generateReport(idx)),
      page: 1,
      pageSize: 10,
      isAsc: true,
    },
  })
})
router.get('/:id', (req, res) => {
  res.json({
    code: '200',
    message: 'success',
    data: {
      report: generateReport(req.params.id),
    },
  })
})

module.exports = router
