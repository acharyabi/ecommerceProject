"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductProvider = void 0;
const constants_1 = require("../../utils/constants");
const order_product_entity_1 = require("./entities/order-product.entity");
exports.orderProductProvider = [
    {
        provide: constants_1.ORDER_PRODUCT_REPOSITORY,
        useValue: order_product_entity_1.OrderProduct,
    },
];
//# sourceMappingURL=order-product.provider.js.map