"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductService = void 0;
const common_1 = require("@nestjs/common");
let CategoriesProductService = class CategoriesProductService {
    create(createCategoriesProductDto) {
        return 'This action adds a new categoriesProduct';
    }
    findAll() {
        return `This action returns all categoriesProduct`;
    }
    findOne(id) {
        return `This action returns a #${id} categoriesProduct`;
    }
    update(id, updateCategoriesProductDto) {
        return `This action updates a #${id} categoriesProduct`;
    }
    remove(id) {
        return `This action removes a #${id} categoriesProduct`;
    }
};
exports.CategoriesProductService = CategoriesProductService;
exports.CategoriesProductService = CategoriesProductService = __decorate([
    (0, common_1.Injectable)()
], CategoriesProductService);
//# sourceMappingURL=categories-product.service.js.map