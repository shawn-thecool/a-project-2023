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

module.exports = router
