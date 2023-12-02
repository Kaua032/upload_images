const Picture = require("../models/Picture.js");

const CreatePicture = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();

    res.json({ picture, msg: "Imagem salva com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CreatePicture };
