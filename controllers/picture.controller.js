const Picture = require("../models/Picture.js");

const fs = require("fs");

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

const FindAll = async (req, res) => {
  try {
    const pictures = await Picture.find();

    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Remove = async (req, res) => {
  const { id } = req.params;
  try {
    const picture = await Picture.findById(id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    fs.unlinkSync(picture.src);

    await Picture.deleteOne({ id });

    res.json({ message: "Imagem removida" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CreatePicture, FindAll, Remove };
