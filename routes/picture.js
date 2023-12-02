const { Router } = require("express");
const { CreatePicture } = require("../controllers/picture.controller");

const router = Router();

router.post("/", CreatePicture);

module.exports = router;
