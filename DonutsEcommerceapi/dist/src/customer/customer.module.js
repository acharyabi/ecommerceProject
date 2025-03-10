"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_controller_1 = require("./customer.controller");
const customer_provider_1 = require("./customer.provider");
const sequelize_1 = require("@nestjs/sequelize");
const customer_entity_1 = require("./entities/customer.entity");
const order_entity_1 = require("../order/entities/order.entity");
const product_entity_1 = require("../products/entities/product.entity");
const payment_entity_1 = require("../payments/entities/payment.entity");
const order_provider_1 = require("../order/order.provider");
const payment_provider_1 = require("../payments/payment.provider");
const order_product_provider_1 = require("../order-product/order-product.provider");
const products_provider_1 = require("../products/products.provider");
const user_provider_1 = require("../users/user.provider");
let CustomerModule = class CustomerModule {
};
exports.CustomerModule = CustomerModule;
exports.CustomerModule = CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([customer_entity_1.Customer, order_entity_1.Order, product_entity_1.Product, payment_entity_1.Payment])],
        controllers: [customer_controller_1.CustomerController],
        providers: [
            customer_service_1.CustomerService,
            ...customer_provider_1.customerProvider,
            ...order_provider_1.orderProvider,
            ...payment_provider_1.paymentProvider,
            ...order_product_provider_1.orderProductProvider,
            ...products_provider_1.productProvider,
            ...user_provider_1.userProvider,
        ],
    })
], CustomerModule);
//# sourceMappingURL=customer.module.js.map