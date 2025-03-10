"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProvider = void 0;
const constants_1 = require("../../utils/constants");
const product_entity_1 = require("./entities/product.entity");
exports.productProvider = [
    {
        provide: constants_1.PRODUCT_REPOSITORY,
        useValue: product_entity_1.Product,
    },
];
//# sourceMappingURL=products.provider.js.map