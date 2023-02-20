const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  res.json({
    code: '200',
    message: 'success',
    data: {
      site: {
        id: req.params.id,
        name: 'test-name',
        url: 'http://www.naver.com',
        platform: 'custom',
        status: 'stop',
      },
    },
  })
})
router.post('/', (req, res) => {
  res.json({
    code: '200',
    message: 'success',
    data: {
      site: {
        ...req.body,
        id: String(Math.random()),
        status: 'siteCreated',
      },
    },
  })
})

module.exports = router
