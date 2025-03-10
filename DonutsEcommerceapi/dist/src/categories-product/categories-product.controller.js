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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductController = void 0;
const common_1 = require("@nestjs/common");
const categories_product_service_1 = require("./categories-product.service");
const create_categories_product_dto_1 = require("./dto/create-categories-product.dto");
const update_categories_product_dto_1 = require("./dto/update-categories-product.dto");
const jwt_auth_gaurd_1 = require("../auth/jwt-auth.gaurd");
let CategoriesProductController = class CategoriesProductController {
    constructor(categoriesProductService) {
        this.categoriesProductService = categoriesProductService;
    }
    create(createCategoriesProductDto) {
        return this.categoriesProductService.create(createCategoriesProductDto);
    }
    findAll() {
        return this.categoriesProductService.findAll();
    }
    findOne(id) {
        return this.categoriesProductService.findOne(+id);
    }
    update(id, updateCategoriesProductDto) {
        return this.categoriesProductService.update(+id, updateCategoriesProductDto);
    }
    remove(id) {
        return this.categoriesProductService.remove(+id);
    }
};
exports.CategoriesProductController = CategoriesProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categories_product_dto_1.CreateCategoriesProductDto]),
    __metadata("design:returntype", void 0)
], CategoriesProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_categories_product_dto_1.UpdateCategoriesProductDto]),
    __metadata("design:returntype", void 0)
], CategoriesProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesProductController.prototype, "remove", null);
exports.CategoriesProductController = CategoriesProductController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    (0, common_1.Controller)('categories-product'),
    __metadata("design:paramtypes", [categories_product_service_1.CategoriesProductService])
], CategoriesProductController);
//# sourceMappingURL=categories-product.controller.js.map