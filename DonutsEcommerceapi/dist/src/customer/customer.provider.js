"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProvider = void 0;
const constants_1 = require("../../utils/constants");
const customer_entity_1 = require("./entities/customer.entity");
exports.customerProvider = [
    {
        provide: constants_1.CUSTOMER_REPOSITORY,
        useValue: customer_entity_1.Customer,
    },
];
//# sourceMappingURL=customer.provider.js.map