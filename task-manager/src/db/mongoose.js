const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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
        type: {
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
                    throw new Error(' at least two images')
                }
            }
        },
        phone: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value)) {
                    throw new Error('Phone is invalid')
                }
            }
        },
        date: {
            type: Date,
            required: false,
            unique: false,
            default: Date.now(),
        },
    }}
})

const product = new Product({
    name: "the new iPhone 12",
    category: "phones",
    isActive: true,
    details: {
        description: "iPhone 12 Pro Max",
        price: 7000,
        images: [
            "https://www.idigital.co.il/files/iphone12/iphone12/iPhone_12_Lineup_Screen__WWEN.jpg",
            "https://www.idigital.co.il/files/iphone12/iphone12pro-max/iPhone_12_Pro_Max_Lineup_Screen__WWEN.jpg",
        ],
        phone: "054-0000000",
    },
});

product.save().then(() => {
    console.log(product)
}).catch((error) => {
    console.log('Error!', error)
})

