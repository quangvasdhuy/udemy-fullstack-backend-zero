// server side
const express = require('express')
const {getHomepage, getABC, hoidanIT} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", hoidanIT);


module.exports = router