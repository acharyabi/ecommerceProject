"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductModule = void 0;
const common_1 = require("@nestjs/common");
const order_product_service_1 = require("./order-product.service");
const order_product_controller_1 = require("./order-product.controller");
const order_product_provider_1 = require("./order-product.provider");
const sequelize_1 = require("@nestjs/sequelize");
const order_product_entity_1 = require("./entities/order-product.entity");
let OrderProductModule = class OrderProductModule {
};
exports.OrderProductModule = OrderProductModule;
exports.OrderProductModule = OrderProductModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([order_product_entity_1.OrderProduct])],
        controllers: [order_product_controller_1.OrderProductController],
        providers: [order_product_service_1.OrderProductService, ...order_product_provider_1.orderProductProvider],
    })
], OrderProductModule);
//# sourceMappingURL=order-product.module.js.map