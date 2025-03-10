"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductModule = void 0;
const common_1 = require("@nestjs/common");
const categories_product_service_1 = require("./categories-product.service");
const categories_product_controller_1 = require("./categories-product.controller");
const sequelize_1 = require("@nestjs/sequelize");
const categories_product_entity_1 = require("./entities/categories-product.entity");
let CategoriesProductModule = class CategoriesProductModule {
};
exports.CategoriesProductModule = CategoriesProductModule;
exports.CategoriesProductModule = CategoriesProductModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([categories_product_entity_1.CategoriesProduct])],
        controllers: [categories_product_controller_1.CategoriesProductController],
        providers: [categories_product_service_1.CategoriesProductService],
    })
], CategoriesProductModule);
//# sourceMappingURL=categories-product.module.js.map