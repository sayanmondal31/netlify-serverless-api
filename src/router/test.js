const express = require("express");
const { dummytest, dummytesttwo } = require("../controller/test");

const router = express.Router();

router.get("/test", dummytest);
router.get("/test2", dummytesttwo);

module.exports = router;
