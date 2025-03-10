"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProduct = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_entity_1 = require("../../category/entities/category.entity");
const product_entity_1 = require("../../products/entities/product.entity");
let CategoriesProduct = class CategoriesProduct extends sequelize_typescript_1.Model {
};
exports.CategoriesProduct = CategoriesProduct;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CategoriesProduct.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => category_entity_1.Category),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CategoriesProduct.prototype, "categoryId", void 0);
exports.CategoriesProduct = CategoriesProduct = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'categoriesProducts',
    })
], CategoriesProduct);
//# sourceMappingURL=categories-product.entity.js.map