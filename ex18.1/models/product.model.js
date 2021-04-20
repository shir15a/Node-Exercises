const mongoose = require('mongoose')
const validator = require('validator')


const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
    },
    details: {
        description: {
            type: String,
            required: true,
            validate(value) {
                if (value.length < 10) {
                    throw new Error('at least 10 letters.')
                }
            }
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value < 0) {
                    throw new Error('not a positive number')
                }
            }
        },
        discount: {
            type: Number,
            required: false,
            default: 0
        },
        images: {
            type: Array,
            required: false,
            validate(value) {
                if (value.length < 2) {
                    throw new Error('at least two images')
                }
            }
        },
        phone: {
            type: String,
            minLength: 10,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, "he-IL")){
                    throw new Error("not an israeli Number");
                }
            }
        },
        date: {
            type: Date,
            required: false,
            unique: false,
            default: Date.now(),
        },
    }
})


module.exports = Product;