"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentProvider = void 0;
const constants_1 = require("../../utils/constants");
const payment_entity_1 = require("./entities/payment.entity");
exports.paymentProvider = [
    {
        provide: constants_1.PAYMENT_REPOSITORY,
        useValue: payment_entity_1.Payment,
    },
];
//# sourceMappingURL=payment.provider.js.map