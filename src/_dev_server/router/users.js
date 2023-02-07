const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.json({
    code: "200",
    message: "success",
    data: {
      user: {
        id: req.params.id,
        name: "test-name",
        email: "test@naver.com",
        type: "viewer",
        birth: new Date(1990, 12, 14).getTime(),
        address: {
          country: "korea",
          state: "state",
          city: "seoul",
          street: "test street",
          zipCode: "1111-0012",
        },
        gender: "mail",
        phone: "+82 01-1234-1234",
      },
    },
  });
});

module.exports = router;
