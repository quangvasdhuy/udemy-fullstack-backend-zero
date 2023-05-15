// server side
const express = require('express')
const {getHomepage, getABC, hoidanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser} = require('../controllers/homeController')
const router = express.Router()

//router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", hoidanIT);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser)
router.post("/update-user", postUpdateUser)


module.exports = router