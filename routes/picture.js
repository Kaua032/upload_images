const { Router } = require("express");
const { CreatePicture, FindAll } = require("../controllers/picture.controller");

const upload = require("../config/multer.js");

const router = Router();

router.post("/", upload.single("file"), CreatePicture);
router.get("/", FindAll)

module.exports = router;
