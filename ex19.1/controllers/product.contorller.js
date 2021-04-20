const productModel = require("./../models/product.model");

const createProduct = (req, res) => {
    const {
        name,
        category,
        isActive,
        description,
        price,
        images,
        phone,
    } = req.body;

    const product = new productModel({
        name,
        category,
        isActive,
        details: {
            description,
            price,
            images,
            phone,
        },
    });

    product.save((err) => {
        if (err) return res.json({ error: err });
        return res.json({ success: product });
      });

    // product.save().then(() => {
    //     console.log(success)
    // }).catch((error) => {
    //     console.log('Error!', error)
    // })

};

const getProducts = (req, res) => {
    productModel.find({}).then((products) => {
        return res.send(products);
    });
};


const getProductsById = (req, res) => {
    const { id } = req.params;
    productModel.find({"_id" : id}).then((product) => {
        return res.send(product);
    });
};

const getAllActive = (req, res) => {
    productModel.find({isActive : true}).then((products) => {
        return res.send(products);
    });
};

module.exports = {
    create: createProduct,
    getAll: getProducts,
    getById : getProductsById,
    allActive: getAllActive
};