export const CUSTOM_ERROR = 'dummy error message'

export const MOCK_CATEGORIES = [
    {
        "id": 1,
        "name": "Personal Care",
        "subCategories": [
            {
                "name": "Shampoo",
                "id": "shampoo",
                "productIds": [
                    123123,
                    123123,
                    123123
                ]
            },
            {
                "name": "Handwash",
                "id": "handwash",
                "productIds": [
                    123123,
                    123123,
                    123123
                ]
            }
        ]
    }
]

export function fetchCategories() {
    return new Promise((resolve, reject) => {
        resolve(MOCK_CATEGORIES),
            reject(CUSTOM_ERROR)
    })
}

export const MOCK_PRODUCTS = [
    {
        "subcategory-id": "handwash",
        "name": "Resurrection Handwash",
        "brand": {
            "name": "Aesop"
        },
        "price": "39,99 €",
        "img": "https://m.media-amazon.com/images/I/716ryPkQxSL._SX522_.jpg"
    },
    {
        "subcategory-id": "toothpaste",
        "name": "Whitening Mint Toothpaste",
        "brand": {
            "name": "Marvis"
        },
        "price": "9,95 €",
        "img": "https://cdn.shopify.com/s/files/1/0072/8514/5709/products/Marvis-WhiteningMintToothpaste1-1300px_1140x.jpg?v=1629783683"
    },
    {
        "subcategory-id": "handwash",
        "name": "Dettol Handwash",
        "brand": {
            "name": "Dettol"
        },
        "price": "10,95 €",
        "img": "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/h89/h57/8871181156382/J%20Hand%20Soap%20Ori.jpg?width=1280&height=1280"
    },
    {
        "subcategory-id": "handwash",
        "name": "Caresse Handwash",
        "brand": {
            "name": "Caresse"
        },
        "price": "13,95 €",
        "img": " https://dailydukan.pk/wp-content/uploads/2018/10/caresse-whitening.png"
    }
];

export function fetchProducts() {
    return new Promise((resolve, reject) => {
        resolve(MOCK_PRODUCTS),
            reject(CUSTOM_ERROR)
    })
}