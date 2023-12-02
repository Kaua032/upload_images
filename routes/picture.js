const { Router } = require("express");
const { CreatePicture } = require("../controllers/picture.controller");

const upload = require("../config/multer.js");

const router = Router();

router.post("/", upload.single("file"), CreatePicture);

module.exports = router;
