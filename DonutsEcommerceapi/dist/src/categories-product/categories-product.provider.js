"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryProductProvider = void 0;
const constants_1 = require("../../utils/constants");
const categories_product_entity_1 = require("./entities/categories-product.entity");
exports.categoryProductProvider = [
    {
        provide: constants_1.CATEGORY_PRODUCT_REPOSITORY,
        useValue: categories_product_entity_1.CategoriesProduct,
    },
];
//# sourceMappingURL=categories-product.provider.js.map