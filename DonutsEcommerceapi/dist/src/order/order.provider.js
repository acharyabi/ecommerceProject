"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProvider = void 0;
const constants_1 = require("../../utils/constants");
const order_entity_1 = require("./entities/order.entity");
exports.orderProvider = [
    {
        provide: constants_1.ORDER_REPOSITORY,
        useValue: order_entity_1.Order,
    },
];
//# sourceMappingURL=order.provider.js.map