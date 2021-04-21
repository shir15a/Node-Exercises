const productModel = require("../models/product.model");

const createProduct = (req, res) => {
    const {
        name,
        category,
        isActive,
        details
    } = req.body;

    const product = new productModel({
        name,
        category,
        isActive,
        details,
    });

    product.save((err) => {
        if (err) return res.status(400).json({ error: err });
        return res.status(201).json({ success: product });
    });
};

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        return res.send(products);
    }
    catch (error) {
        res.status(500).json({ error })
    }
};


const getProductsById = async (req, res) => {
    const { id } = req.params;
    try {
        let product = await productModel.findOne({ "_id": id })
        return res.status(200).send(product)
    }
    catch (error) {
        return res.status(404).send(error)
    }
};

const getAllActive = async (req, res) => {
    try {
        const allActive = productModel.find({ isActive: true })
        return res.send(allActive);
    }
    catch (error) {
        return res.status(500).json({ error })
    }
};

const specificPriceRange = async (req, res) => {
    const { min, max } = req.body;
    try {
        const products = await productModel.find({ "details.price": { $gte: min, $lte: max } });
        return res.send(products)
    }
    catch (error) {
        return res.status(500).json({ error })
    }
};


module.exports = {
    create: createProduct,
    getAll: getProducts,
    getById: getProductsById,
    allActive: getAllActive,
    specificPriceRange: specificPriceRange
};