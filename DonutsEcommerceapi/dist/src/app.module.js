"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const categories_product_module_1 = require("./categories-product/categories-product.module");
const category_module_1 = require("./category/category.module");
const order_product_module_1 = require("./order-product/order-product.module");
const order_module_1 = require("./order/order.module");
const payments_module_1 = require("./payments/payments.module");
const product_slider_image_module_1 = require("./product-slider-image/product-slider-image.module");
const products_module_1 = require("./products/products.module");
const users_module_1 = require("./users/users.module");
const customer_module_1 = require("./customer/customer.module");
const admins_module_1 = require("./admins/admins.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadModels: true,
            }),
            products_module_1.ProductsModule,
            category_module_1.CategoryModule,
            users_module_1.UsersModule,
            order_module_1.OrderModule,
            categories_product_module_1.CategoriesProductModule,
            product_slider_image_module_1.ProductSliderImageModule,
            order_product_module_1.OrderProductModule,
            payments_module_1.PaymentsModule,
            auth_module_1.AuthModule,
            customer_module_1.CustomerModule,
            admins_module_1.AdminsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map