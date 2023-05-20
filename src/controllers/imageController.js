const Image = require("../models/imageModel")
const fs = require("fs")

exports.create = async (req, res) => {
    try {
        const {name} = req.body
        const file = req.file

        const image = new Image({
            name,
            src: file.path,
        })

        await image.save()
        res.json({image, message: "successfully saved image"})
    } catch (error) {
        res.status(500).json({message: "error saving image"})
    }
}

exports.findAll = async (req, res) => {
    try {
        const images = await Image.find()
        res.json(images)
    } catch (error) {
        res.status(500).json({message: "error when fetching images"})
    }
}

exports.remove = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id)

        if(!image) {
            return res.status(404).json({message: "image not found"})
        }

        fs.unlinkSync(image.src) //remove o arquivo local
        await image.deleteOne() //remove do banco de dados
        res.json({message: "successfully removed image"})
    } catch (error) {
        res.status(500).json({message: "error when fetching images"})
    }
}