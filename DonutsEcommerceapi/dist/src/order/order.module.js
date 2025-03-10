"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const order_provider_1 = require("./order.provider");
const sequelize_1 = require("@nestjs/sequelize");
const order_entity_1 = require("./entities/order.entity");
const products_provider_1 = require("../products/products.provider");
const order_product_provider_1 = require("../order-product/order-product.provider");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_entity_1.Order])],
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            ...order_provider_1.orderProvider,
            ...products_provider_1.productProvider,
            ...order_product_provider_1.orderProductProvider,
        ],
        exports: [OrderModule],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map