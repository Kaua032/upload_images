const { Router } = require("express");
const {
  CreatePicture,
  FindAll,
  Remove,
} = require("../controllers/picture.controller");

const upload = require("../config/multer.js");

const router = Router();

router.post("/", upload.single("file"), CreatePicture);
router.get("/", FindAll);
router.delete("/:id", Remove);

module.exports = router;
